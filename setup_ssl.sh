#!/bin/bash

# Configuration
DOMAIN="rishabhrajsingh.com"
# Change this email if you want notifications about expiry
EMAIL="admin@rishabhrajsingh.com" 

echo "Installing Nginx and Certbot..."
sudo apt-get update
sudo apt-get install -y nginx certbot python3-certbot-nginx

echo "Configuring Nginx Reverse Proxy..."
# Create Nginx Config
sudo tee /etc/nginx/sites-available/$DOMAIN <<EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Enable the site and remove default
sudo ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test and Reload
echo "Testing Nginx config..."
sudo nginx -t && sudo systemctl reload nginx

echo "Obtaining SSL Certificate..."
# Request Cert (Interactive mode so you can read TOS if needed, or fully automated)
sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN

echo "----------------------------------------------------------------"
echo "SSL Setup Complete! Visit https://$DOMAIN"
echo "If it fails, make sure Ports 80 and 443 are open in your EC2 Security Group."
echo "----------------------------------------------------------------"

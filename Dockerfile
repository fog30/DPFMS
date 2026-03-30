FROM php:8.2-apache

# Copy project files to server
COPY . /var/www/html/

# Enable mysqli
RUN docker-php-ext-install mysqli

# Expose port
EXPOSE 80
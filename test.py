from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()

# Open your project
driver.get("http://localhost/DPFMS/index.html")

time.sleep(2)

# Example: click payment page button
driver.find_element(By.ID, "paymentBtn").click()

time.sleep(2)

# Example: fill form
driver.find_element(By.ID, "product").send_keys("Rice")
driver.find_element(By.ID, "quantity").send_keys("2")

# Submit
driver.find_element(By.ID, "submitBtn").click()

time.sleep(3)

driver.quit()
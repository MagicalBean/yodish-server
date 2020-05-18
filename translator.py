import sys
from selenium import webdriver
# from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome(
    "D:\\Coding Projects\\Python Projects\\WebDrivers\\chromedriver.exe")
driver.get("https://funtranslations.com/yoda")

text = str(sys.argv[1])

driver.find_element_by_id("ytext").send_keys(text)
driver.find_element_by_id("btn-translate").click()
output = driver.find_element_by_class_name(
    "result-text").get_attribute("innerHTML")
driver.quit()
print(output)
sys.stdout.flush()

import RPi.GPIO as GPIO
import datetime
import time

GPIO.setmode(GPIO.BCM)
pins = [3,2,17,4,27,6,11,22]
rpins = [22,11,6,27,4,17,2,3]

def test():
  for pin in pins:
    print("low ", pin)
    GPIO.setup(pin, GPIO.OUT) 
    GPIO.output(pin, GPIO.LOW)
    time.sleep(0.25)
  for pin in rpins: 
    print("high ", pin)
    GPIO.setup(pin, GPIO.OUT) 
    GPIO.output(pin, GPIO.HIGH)
    time.sleep(0.25)
  GPIO.cleanup

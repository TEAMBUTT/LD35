package.path = package.path .. ';./vendor/?.lua'

DEBUG = not not os.getenv('HATER_DEBUG')

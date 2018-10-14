import pymysql

DATABASES = {
        'HOST': '127.0.0.1',
        'USER': 'DEAN',
        'PASSWORD': '971013',
        'NAME': 'szu_restaurant',  
        'PORT': '3306',
}
def setting():
	db = pymysql.connect(DATABASES["HOST"],DATABASES["USER"],DATABASES["PASSWORD"],DATABASES["NAME"],int(DATABASES["PORT"]),charset="utf8")
	return db
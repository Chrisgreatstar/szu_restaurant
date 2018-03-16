import pymysql

DATABASES = {
        'HOST': '127.0.0.1',
        'USER': 'food_site',        
        'PASSWORD': '0000',    
        'NAME': 'szu_restaurant',  
        'PORT': '3306',
}
def db_cursor():
    db = pymysql.connect(DATABASES["HOST"],DATABASES["USER"],DATABASES["PASSWORD"],DATABASES["NAME"],int(DATABASES["PORT"]),charset="utf8")
    cursor = db.cursor()
    return cursor
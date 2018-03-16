from food_site.admin import db_cursor

def getDishes(restaurant_id):
    cursor = db_cursor()
    cursor.execute(cursor.mogrify("Select * from dish where restaurant_id = %s order by id", restaurant_id))
    results = cursor.fetchall()
    cursor.close()
    datas = []
    for row in results:
        data = {}
        data['id'] = row[0]
        #data['restaurant_id'] = row[1]
        data['name'] = row[2]
        data['price'] = row[3]
        data['photo_path'] = row[4]
        data['description'] = row[5]
        datas.append(data)
    return datas

def getOrderForms(user_id):
    cursor = db_cursor()
    cursor.execute(cursor.mogrify("Select * from order_form where user_id = %s order by id desc", user_id))
    results = cursor.fetchall()
    cursor.close()
    datas = []
    for row in results:
        data = {}
        data['id'] = row[0]
        #data['user_id'] = row[1]
        data['dish_id'] = row[2]
        data['restaurant_id'] = row[3]
        data['comment_id'] = row[4]
        data['time'] = row[5]
        datas.append(data)
    return datas

def getComments(dish_id):
    cursor = db_cursor()
    cursor.execute(cursor.mogrify("Select * from comment where dish_id = %s order by id desc", dish_id))
    results = cursor.fetchall()
    cursor.close()
    datas = []
    for row in results:
        data = {}
        data['id'] = row[0]
        data['user_id'] = row[1]
        # data['dish_id'] = row[2]
        data['restaurant_id'] = row[3]
        data['oder_id'] = row[4]
        data['time'] = row[5]
        data['comment'] = row[6]
        datas.append(data)
    return datas

def searchDishes(words):
    cursor = db_cursor()
    cursor.execute(cursor.mogrify("Select * from dish where name like %s", "%" + words + "%"))
    results = cursor.fetchall()
    cursor.close()
    datas = []
    for row in results:
        data = {}
        data['id'] = row[0]
        data['restaurant_id'] = row[1]
        data['name'] = row[2]
        data['price'] = row[3]
        data['photo_path'] = row[4]
        data['description'] = row[5]
        datas.append(data)
    return datas

# Test:
# print(getDishes(1))
# print(getOrderForms(1))
# print(getComments(1))
# print(searchDishes("梅菜"))
###


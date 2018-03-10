from admin import setting

def getDishes(restaurant_id):
    connection = setting()
    cursor = connection.cursor()
    cursor.execute(cursor.mogrify("Select * from dish where restaurant_id = %s", restaurant_id))
    results = cursor.fetchall()
    cursor.close()
    connection.close()
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
    connection = setting()
    cursor = connection.cursor()
    cursor.execute(cursor.mogrify("Select * from order_form where user_id = %s", user_id))
    results = cursor.fetchall()
    cursor.close()
    connection.close()
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
    connection = setting()
    cursor = connection.cursor()
    cursor.execute(cursor.mogrify("Select * from comment where dish_id = %s", dish_id))
    results = cursor.fetchall()
    cursor.close()
    connection.close()
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
    connection = setting()
    cursor = connection.cursor()
    cursor.execute(cursor.mogrify("Select * from dish where name like %s", "%" + words + "%"))
    results = cursor.fetchall()
    cursor.close()
    connection.close()
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


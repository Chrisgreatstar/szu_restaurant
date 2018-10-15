from food_site.admin import *

def getDishes(restaurant_id):
    connection=setting()
    cursor = connection.cursor()
    cursor.execute(cursor.mogrify("Select * from dish where restaurant_id = %s order by id", restaurant_id))
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
        data['photo'] = row[4]
        data['description'] = row[5]
        datas.append(data)
    return datas

#用户订单
def getOrderForms(user_id):
    connection=setting()
    cursor = connection.cursor()
    cursor.execute(cursor.mogrify("Select dish_id,comment_id,time from order_form where user_id = %s order by id desc", user_id))
    results = cursor.fetchall()
    datas = []
    for row in results:
        data = {}
        dish_id = row[0]
        data['dish_id'] = dish_id
        data['comment_id'] = row[1]
        data['date'] = row[2]

        cursor.execute(cursor.mogrify("Select name,price,photo_path,restaurant_id from dish where id = %s", dish_id))
        result = cursor.fetchone()
        data['name'] = result[0]
        data['price'] = result[1]
        data['photo'] = result[2]
        restaurant_id = result[3]
        cursor.execute(cursor.mogrify("Select name from restaurant where id = %s", restaurant_id))
        result = cursor.fetchone()
        data['restaurant'] = result[0]
        datas.append(data)
    cursor.close()
    connection.close()
    return datas

#返回菜式评论
def getComments(dish_id):
    connection=setting()
    cursor = connection.cursor()
    cursor.execute(cursor.mogrify("Select * from comment where dish_id = %s order by id desc", dish_id))
    results = cursor.fetchall()
    cursor.close()
    connection.close()
    datas = []
    for row in results:
        data = {}
        data['id'] = row[0]
        data['user_id'] = row[1]
        data['dish_id'] = row[2]
        data['restaurant_id'] = row[3]
        data['oder_id'] = row[4]
        data['time'] = row[5]
        data['comment'] = row[6]
        data['grade'] = row[7]
        datas.append(data)
    return datas

#搜索菜式
def searchDishes(words):
    connection=setting()
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
        data['photo'] = row[4]
        data['description'] = row[5]
        datas.append(data)
    return datas

#饭菜评价
def writeComment(user_id,dish_id,restaurant_id,order_id,time,comment,rank):
    connection=setting()
    cursor=connection.cursor()
    cursor.execute(cursor.mogrify("INSERT INTO comment(user_id,dish_id,restaurant_id,order_id,time,comment,rank) VALUES (%s, %s, %s, %s, %s, %s, %s)",(user_id,dish_id,restaurant_id,order_id,time,comment,rank)))
    connection.commit()
    cursor.close()
    connection.close()
    data="success"
    return data

#饭菜评论图片插入
def insertCommentPhoto(restaurant_id,dish_id,user_id,photo_path):
    connection=setting()
    cursor=connection.cursor()
    cursor.execute(cursor.mogrify("INSERT INTO comment_photo(restaurant_id,dish_id,user_id,photo_path) VALUES (%s, %s, %s, %s)",(restaurant_id,dish_id,user_id,photo_path)))
    connection.commit()
    cursor.close()
    connection.close()
    return "success"

#饭堂打分
def restaurantAddLike(restaurant_id,like):
    connection=setting()
    cursor=connection.cursor()
    cursor.execute(cursor.mogrify("Select rank_count,rank from restaurant WHERE id = %s", restaurant_id))
    results = cursor.fetchall()
    rank_count=int(results[0][0])
    rank=float(results[0][1])
    if rank_count==0 and rank==0:
        rank_count=rank_count+1
        rank=like
    else :
        rank=rank*rank_count+int(like)
        rank_count=rank_count+1
        rank=rank/rank_count
    rank_count=str(rank_count)
    rank=str(rank)
    cursor.execute(cursor.mogrify("UPDATE restaurant SET rank_count = %s, rank = %s WHERE id = %s",(rank_count,rank,restaurant_id)))
    connection.commit()
    cursor.close()
    connection.close()
    return "success"

#饭堂建议反馈
def writeRestaurantSugestion(restaurant_id,user_id,sugestion):
    connection=setting()
    cursor=connection.cursor()
    cursor.execute(cursor.mogrify("INSERT INTO restaurant_sugestion(restaurant_id,user_id,sugestion) VALUES (%s, %s, %s)",(restaurant_id,user_id,sugestion)))
    connection.commit()
    cursor.close()
    connection.close()
    return "success"

#返回饭堂建议信息
def getRestaurantSugestion(restaurant_id):
    connection=setting()
    cursor=connection.cursor()
    cursor.execute(cursor.mogrify("Select * from restaurant_sugestion where restaurant_id = %s", restaurant_id))
    results = cursor.fetchall()
    cursor.close()
    connection.close()
    datas = []
    for row in results:
        data = {}
        data['id'] = row[0]
        data['restaurant_id'] = row[1]
        data['user_id'] = row[2]
        data['sugestion'] = row[3]
        data['time'] = row[4]
        datas.append(data)
    print(datas)
    return datas

#饭堂排行榜
def restaurantRankList():
    print("getrestaurantRankList:")
    connection=setting()
    cursor=connection.cursor()
    cursor.execute(cursor.mogrify("Select * from restaurant order by rank desc limit 0,10"))
    results = cursor.fetchall()
    cursor.close()
    connection.close()
    datas = []
    for row in results:
        data = {}
        data['id'] = row[0]
        data['name'] = row[1]
        data['photo_path'] = row[2]
        data['description'] = row[3]
        data['rank'] = row[4]
        datas.append(data)
    print (datas)
    return datas

#每个饭堂的美食排行榜
def dishRankList(restaurant_id):
    connection=setting()
    cursor=connection.cursor()
    cursor.execute(cursor.mogrify("Select * from comment where restaurant_id =%s",restaurant_id))
    results = cursor.fetchall()
    cursor.close()
    connection.close()
    datas = []
    for row in results:
        data = {}
        data['id'] = row[0]
        data['name'] = row[2]
        data['price'] = row[3]
        data['photo_path'] = row[4]
        data['description'] = row[5]
        datas.append(data)
    return datas



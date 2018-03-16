from django.shortcuts import render
from django.http import HttpResponse,StreamingHttpResponse,JsonResponse
from food_site.models import *

# Create your views here.
def dish(request):
	restaurant_id = request.POST["restaurant_id"]
	data = getDishes(restaurant_id)
	return JsonResponse(data, safe = False)

def order(request):
	user_id = request.POST["user_id"]
	data = getOrderForms(user_id)
	return JsonResponse(data, safe = False)

def get_comments(request):
	dish_id = request.POST["dish_id"]
	data = getComments(dish_id)
	return JsonResponse(data, safe = False)

def search_dishes(request):
	words = request.POST["words"]
	data = searchDishes(words)
	return JsonResponse(data, safe = False)

def test(request):
	return render(request, "test.html")
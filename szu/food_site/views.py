from django.shortcuts import render
from django.http import HttpResponse,StreamingHttpResponse,JsonResponse
from food_site.models import *
import hashlib

### 微信服务器配置函数，在开发者选项填写的token为"py_access" ###
def get(request):
	#下面这四个参数是在接入时，微信的服务器发送过来的参数
	signature = request.GET.get('signature', None)
	timestamp = request.GET.get('timestamp', None)
	nonce = request.GET.get('nonce', None)
	echostr = request.GET.get('echostr', None)
	#这个token是自己定义的，填写在开发文档中的Token的位置
	token = 'py_access'
	#把token，timestamp, nonce放在一个序列中，并且按字符排序
	hashlist = [token, timestamp, nonce]
	hashlist.sort()
	#将上面的序列合成一个字符串
	hashstr = ''.join([s for s in hashlist])
	#通过python标准库中的sha1加密算法，处理上面的字符串，形成新的字符串。
	hashstr = hashlib.sha1(hashstr.encode("utf8")).hexdigest()
	#把生成的字符串和微信服务器发送过来的字符串比较，
	#如果相同，就把服务器发过来的echostr字符串返回去
	if hashstr == signature:
		return HttpResponse(echostr)

### 验证是否为微信登录，录入新用户数据 ###
def wx_login_comfirm(request):
	try:
		appId = "wxdcf39e587e7f6d90"
		appSecret = "569ef02f47ec7621cd8771ae7fef1f91"
		url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid="+appId+"&secret="+appSecret+"&code=" + request.GET['code'] + "&grant_type=authorization_code"
		r = requests.get(url)
		r.encoding = r.apparent_encoding
		JSON = r.text
		JSON = eval(JSON)
		# print(JSON['access_token'],JSON['expires_in'],JSON['refresh_token'],JSON['openid'],JSON['scope'])
		wx_login(JSON['access_token'],JSON['expires_in'],JSON['refresh_token'],JSON['openid'],JSON['scope'])
		return HttpResponse("wx_success")
	except:
		return HttpResponse("wx_failure")

	### 获取用户详细信息 ###
	# url = "https://api.weixin.qq.com/sns/userinfo?access_token=" + JSON['access_token'] + "&openid=" + JSON['openid'] + "&lang=zh_CN"
	# r = requests.get(url)
	# r.encoding = r.apparent_encoding
	# JSON = r.text
	# JSON = eval(JSON)
	# print(JSON['openid'],JSON['nickname'],JSON['sex'],JSON['language'],JSON['city'],JSON['province'],JSON['province'],JSON['country'],JSON['headimgurl'],JSON['privilege'])

### 引导用户打开跳转链接，跳转到上面的函数中 ###
def wx_login_redirect(request):
	redirect_uri = "www.xxx.com/wx_login_comfirm/"
	href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxde6a9e2fd63767d5&redirect_uri="+redirect_uri+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"
	return HttpResponseRedirect(href)

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

"""szu URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.views.generic import TemplateView
from food_site.views import *

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', TemplateView.as_view(template_name="index.html")),
    url(r'^dish/$', dish),
    url(r'^order/$', order),
    url(r'^get_comments/$', get_comments),
    url(r'^search_dishes/$', search_dishes),
    url(r'^write_comments/$',write_comments),
    url(r'^restaurant_like/$',restaurant_like),
    url(r'^insert_comment_photo/$',insert_comment_photo),
    url(r'^write_restaurant_sugestion/$',write_restaurant_sugestion),
    url(r'^get_restaurant_sugestion/$',get_restaurant_sugestion),
    url(r'^restaurant_rank_list/$',restaurant_rank_list),
    url(r'^dish_rank_list/$',dish_rank_list),
    url(r'^test/$', test),
]

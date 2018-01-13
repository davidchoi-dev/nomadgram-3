from django.conf.urls import url

from . import views

urlpatterns = [

    url(
        regex=r'^explore/$',
        view=views.ExploreUsers.as_view(),
        name='exploreusers'
    ),
    url(
        regex=r'^(?P<user_id>[0-9]+)/follow/$',
        view=views.FollowUser.as_view(),
        name='follow_user'

    )

   
]



#
#    url(
#        regex=r'^$',
#        view=views.UserListView.as_view(),
#        name='list'
#    ),
#    url(
#        regex=r'^~redirect/$',
#        view=views.UserRedirectView.as_view(),
#        name='redirect'
#    ),
#    url(
#        regex=r'^(?P<username>[\w.@+-]+)/$',
#        view=views.UserDetailView.as_view(),
#        name='detail'
#    ),
#    url(
#        regex=r'^~update/$',
#        view=views.UserUpdateView.as_view(),
#        name='update'
#    ),
#    '''
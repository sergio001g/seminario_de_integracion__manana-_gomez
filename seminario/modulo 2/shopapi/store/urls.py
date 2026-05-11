from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView
from store.views.health import health_check
from store.views.auth import RegisterView, LogoutView
from store.serializers.auth import CustomTokenView

router = DefaultRouter()

urlpatterns = [
    path('health/', health_check, name='health-check'),
    path('auth/register/', RegisterView.as_view(), name='auth-register'),
    path('auth/login/', CustomTokenView.as_view(), name='auth-login'),
    path('auth/refresh/', TokenRefreshView.as_view(), name='auth-refresh'),
    path('auth/logout/', LogoutView.as_view(), name='auth-logout'),
    path('', include(router.urls)),
]

from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ExpenseSerializer
from .models import Expense

# Create your views here.


class Expenses(viewsets.ModelViewSet):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer

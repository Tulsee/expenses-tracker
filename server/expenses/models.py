from django.db import models


class Expense(models.Model):
    name = models.CharField(max_length=200)
    amount = models.IntegerField()
    date = models.DateField()

    def __str__(self):
        return self.name

# Общее
Да тут короче имиджборд стыреный на процентов 30 с другого проекта: https://github.com/vinitraj10/Django-React-Blog

# Backend-запуск
клоним:-
```
git clone https://gitlab.com/denvar15/twentysevench
```
зависимости:-
```
cd Backend
pipenv run pip install -r requirements.txt
```
миграции:-
```
pipenv run python manage.py makemigrations
pipenv run python manage.py migrate
```
старт:-
```
pipenv run python manage.py runserver --insecure
```
# Frontend запуск:-
Открытие папки
```
cd Frontend
```
зависимости:-
```
npm install
```
Запуск:-
```
npm run dev
```

Здесь фронт:8080(clientside react) бэк на localhost:8000(django-api)

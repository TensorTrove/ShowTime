FROM ubuntu

RUN apt-get update && apt-get upgrade

RUN apt install python3 --assume-yes

RUN apt install -y python3 python3-pip

WORKDIR /app

COPY . .

RUN pip3 install -r ./req.txt --break-system-packages

CMD ["python3", "./server.py"]
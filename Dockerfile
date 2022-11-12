FROM golang:1.16-alpine
WORKDIR /app
COPY ./server/go.mod ./
COPY ./server/go.sum ./
RUN go mod download
COPY ./server/*.go ./
RUN go build -o /cluster

EXPOSE 8080

CMD [ "/cluster"]
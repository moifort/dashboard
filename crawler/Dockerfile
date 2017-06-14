FROM maven:3.5
MAINTAINER thibaut.mottet@pupscan.fr

WORKDIR /workspace
COPY . .
RUN mvn install

CMD ["java", "-jar", "./target/crawler-0.0.1-SNAPSHOT.jar"]


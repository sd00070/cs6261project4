FROM node:16.5.0

LABEL maintainer="sd00070@my.westga.edu"

WORKDIR /app

RUN npm i -g \
    @angular/cli \
    http-server

COPY container_directive.sh /container_directive.sh

CMD ["/bin/bash", "/container_directive.sh"]

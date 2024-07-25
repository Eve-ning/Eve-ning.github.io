---
title: "How to detect if Docker's MySQL is done initializing"
tags: [ MySQL, Docker, Shell ]
---

If you use `docker-entrypoint-initdb.d/`, you can check if it's done through
the port availability

<!--more-->

Check if the port is used. MySQL doesn't reserve the port until it's
entirely done importing from `docker-entrypoint-initdb.d/`.

```bash
if exec 6<>"/dev/tcp/localhost/$MYSQL_TCP_PORT"; then
  echo "MySQL is ready!"
else
  echo "MySQL is not ready!"
fi
```

You can put this as a separate `.sh` file that's copied to the container,
or directly put it into your compose `healthcheck`.
I personally prefer copying it into the container, the syntax of commands
on the compose file is funky.
I've tested this a few times, it seems to be working consistently.

See how I used it in action: [In the osu-data Repository](https://github.com/Eve-ning/osu-data/blob/dataset/osu_data/osu.mysql.healthcheck.sh)

A short port, but I took a few months to solve this, hope this helps someone!

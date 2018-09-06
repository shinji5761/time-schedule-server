#/bin/bash

### CONST
C_DIR=`pwd`
TABLE_PATH=${C_DIR}/table
VIEW_PATH=${C_DIR}/view
DATA_PATH=${C_DIR}/data
USER_NAME=shinji5761
DATABASE_NAME=time_schedule


### TABLE
cat ${TABLE_PATH}/*.sql | psql -U ${USER_NAME} ${DATABASE_NAME}

### VIEW
cat ${VIEW_PATH}/*.sql | psql -U ${USER_NAME} ${DATABASE_NAME}

## init data or test data
cat ${DATA_PATH}/*.sql | psql -U ${USER_NAME} ${DATABASE_NAME}

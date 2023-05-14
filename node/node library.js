
//yarn add chalk for color in print

//import chalk from "chalk";

//console.log(chalk.bgCyan("hello"));




//yarn add winston ( to maintain logs)

import winston from "winston";
const logger = winston.createLogger({
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({filename:"combined.log"}),

    ],
    
});

logger.log({
    level:"info",
    message:"database has created",
});
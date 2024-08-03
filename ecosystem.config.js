module.exports = {
  apps: [
    {
      name: "settingmore",
      script: "./index.js",
      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: "",
      instances: 1,
      watch: true,
      max_memory_restart: "1G",
      watch_delay: 10000,
      ignore_watch: ["node_modules"],
      // cron_restart: "0 0 * * *",
      // exec_mode: "cluster_mode",
      exec_mode: "cluster",
      autorestart: true,
      watch: true,
      // max_memory_restart: "200M",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],

  deploy: {
    development: {
      user: "ubuntu",
      key: "/home/alh/ashandmorekeys.pem",
      port: "3031",
      host: "52.90.78.94",
      ref: "origin/main",
      repo: "git@gitlab.com:alisalhi3535/settingmore.git",
      path: "/home/ubuntu/back/setting",
      // "post-deploy": "pm2 reload ecosystem.config.js --env development",
      "post-deploy":
        "npm install && pm2 startOrRestart ecosystem.config.js --env development",
    },
    production: {
      user: "ubuntu",
      key: "/home/alh/ashandmorekeys.pem",
      port: "3031",
      host: "52.90.78.94",
      ref: "origin/main",
      repo: "git@gitlab.com:alisalhi3535/settingmore.git",
      path: "/home/ubuntu/back/setting",
      // "post-deploy": "pm2 reload ecosystem.config.js --env development",
      "post-deploy":
        "npm install && pm2 startOrRestart ecosystem.config.js --env production",
    },
  },
};

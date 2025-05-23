module.exports = {
  apps: [{
    name: "medindeniz",
    script: "dist/index.js",
    env: {
      NODE_ENV: "production",
      PORT: 3000
    },
    instances: 1,
    exec_mode: "fork",
    watch: false,
    max_memory_restart: "256M"
  }]
};
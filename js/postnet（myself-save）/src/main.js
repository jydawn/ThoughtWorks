/**
 * Created by xjy on 8/3/16.
 */
let Route = require("./route");
let route=new Route();
const repl = require("repl");
console.log(route.action().text);
//接受用户输入
function handleCmd(cmd, context, filename, done) {
  switchRouter({
    cmd: cmd.trim()
  }, done);
  done(null);
}
repl.start({prompt: "> ", eval: handleCmd});
function switchRouter(context, done) {
  let result = route.action(context.cmd);
  console.log(result.text);
  done(null);
}

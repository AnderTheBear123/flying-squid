var Vec3 = require("vec3").Vec3;

module.exports.player = (player, serv) => {

  player.commands.add({
    base: 'teleport',
    aliases: ['tp'],
    info: 'to teleport a player',
    usage: '/teleport [target player] <destination player or x> [y] [z]',
    op: true,
    parse(str) {
      return str.match(/^(((.* )?~?-?\d* ~?-?\d* ~?-?\d*)|(.+ .+))$/) ? str.split(' ') : false;
    },
    action(args) {
      if(args.length === 2) {
        let entities_from = serv.selectorString(args[0]);
        let entity_to = serv.selectorString(args[1])[0];

        entities_from.forEach(e => e.teleport(entity_to.position.scaled(1/32)));
      } else if(args.length === 3) {
        let x = serv.posFromString(args[0], player.position.x / 32);
        let y = serv.posFromString(args[1], player.position.y / 32);
        let z = serv.posFromString(args[2], player.position.z / 32);
        
        player.teleport(new Vec3(x, y, z));
      } else if(args.length === 4) {
        let entities_from = serv.selectorString(args[0]);

        let x = serv.posFromString(args[1], player_from.x / 32);
        let y = serv.posFromString(args[2], player_from.y / 32);
        let z = serv.posFromString(args[3], player_from.z / 32);

        entities_from.forEach(e => e.teleport(new Vec3(x, y, z)));
      }
    }
  });
};

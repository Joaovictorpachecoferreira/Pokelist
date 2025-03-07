//Protótipo 3.0 de código para uma pokedex para o jogo pokemon TCG Pockect
let cartaEscolhida;

const listaPokemon = [
    { nome: 'Bulbasaur', tipo: 'grama', nIdentificao: '001', habilidades: 'Vine Whipe', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Ivysaur', tipo: 'grama', nIdentificao: '002', habilidades: 'Razor Leaf', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Venusaur', tipo: 'grama', nIdentificao: '003', habilidades: 'Mega Drain', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Venusaur EX', tipo: 'grama', nIdentificao: '004', habilidades: 'Razor Lead and Giant Bloom', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Caterpie', tipo: 'grama', nIdentificao: '005', habilidades: 'Find a Friend', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Metapod', tipo: 'grama', nIdentificao: '006', habilidades: 'Bug Bite', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Butterfree', tipo: 'grama', nIdentificao: '007', habilidades: 'Powder Heal and Gust', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Weedle', tipo: 'grama', nIdentificao: '008', habilidades: 'Sting', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Kakuna', tipo: 'grama', nIdentificao: '009', habilidades: 'Bug Bite', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Beedrill', tipo: 'grama', nIdentificao: '010', habilidades: 'Sharp Sting', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Oddish', tipo: 'grama', nIdentificao: '011', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Gloom', tipo: 'grama', nIdentificao: '012', habilidades: 'Drool', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Vileplume', tipo: 'grama', nIdentificao: '013', habilidades: 'Soothing Scent', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Paras', tipo: 'grama', nIdentificao: '014', habilidades: 'Scratch', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Parasect', tipo: 'grama', nIdentificao: '015', habilidades: 'Slash', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Venonat', tipo: 'grama', nIdentificao: '016', habilidades: 'Tackle', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Venomoth', tipo: 'grama', nIdentificao: '017', habilidades: 'Poison Powder', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Bellsprout', tipo: 'grama', nIdentificao: '018', habilidades: 'Vine Whipe', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Weepinbell', tipo: 'grama', nIdentificao: '019', habilidades: 'Razor Leaf', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Victreebel', tipo: 'grama', nIdentificao: '020', habilidades: 'Fragrance Trap and Vine Whipe', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Exeggcute', tipo: 'grama', nIdentificao: '021', habilidades: 'Seed Bomb', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Exeggutor', tipo: 'grama', nIdentificao: '022', habilidades: 'Stomp', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Exeggutor EX', tipo: 'grama', nIdentificao: '023', habilidades: 'Tropical Swing', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Tangela', tipo: 'grama', nIdentificao: '024', habilidades: 'Absorb', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Scyther', tipo: 'grama', nIdentificao: '025', habilidades: 'Sharp Scythe', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Pinsir', tipo: 'grama', nIdentificao: '026', habilidades: 'Double Horn', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Cottonee', tipo: 'grama', nIdentificao: '027', habilidades: 'Attach', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Whimsicott', tipo: 'grama', nIdentificao: '028', habilidades: 'Rolling Tackle', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Petilil', tipo: 'grama', nIdentificao: '029', habilidades: 'Blot', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Lilligant', tipo: 'grama', nIdentificao: '030', habilidades: 'Leaf Supply', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Skiddo', tipo: 'grama', nIdentificao: '031', habilidades: 'Surprise Attack', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Gogoat', tipo: 'grama', nIdentificao: '032', habilidades: 'Razor Leaf', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Charmander', tipo: 'fogo', nIdentificao: '033', habilidades: 'Ember', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Charmeleon', tipo: 'fogo', nIdentificao: '034', habilidades: 'Fire Claws', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Charizard', tipo: 'fogo', nIdentificao: '035', habilidades: 'Fire Spin', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Charizard EX', tipo: 'fogo', nIdentificao: '036', habilidades: 'Slash and Crimson Storm', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Vulpix', tipo: 'fogo', nIdentificao: '037', habilidades: 'Tail Whip', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Ninetales', tipo: 'fogo', nIdentificao: '038', habilidades: 'Flamethrower', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Growlithe', tipo: 'fogo', nIdentificao: '039', habilidades: 'Bite', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Arcanine', tipo: 'fogo', nIdentificao: '040', habilidades: 'Heat Tackle', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Arcanine EX', tipo: 'fogo', nIdentificao: '041', habilidades: 'Inferno Onrush', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Ponyta', tipo: 'fogo', nIdentificao: '042', habilidades: 'Flare', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Rapidash', tipo: 'fogo', nIdentificao: '043', habilidades: 'Fire Mane', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Magmar', tipo: 'fogo', nIdentificao: '044', habilidades: 'Magma Punch', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Flareon', tipo: 'fogo', nIdentificao: '045', habilidades: 'Flamethrower', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Moltres', tipo: 'fogo', nIdentificao: '046', habilidades: 'Sky Attack', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Moltres EX', tipo: 'fogo', nIdentificao: '047', habilidades: 'Inferno Dance and Heat Blast', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Calor', tipo: 'fogo', nIdentificao: '047', habilidades: 'Combustion', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Salandit', tipo: 'fogo', nIdentificao: '049', habilidades: 'Scratch', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Salazzle', tipo: 'fogo', nIdentificao: '050', habilidades: 'Fire Claws', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Sizzlipede', tipo: 'fogo', nIdentificao: '051', habilidades: 'Gnaw', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Centiskorch', tipo: 'fogo', nIdentificao: '052', habilidades: 'Fire Blast', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Squirtle', tipo: 'agua', nIdentificao: '053', habilidades: 'Water Gun', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Wartortle', tipo: 'agua', nIdentificao: '054', habilidades: 'Wave Splash', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Blastoise', tipo: 'agua', nIdentificao: '055', habilidades: 'Hydro Pump', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Blastoise EX', tipo: 'agua', nIdentificao: '056', habilidades: 'Surf and Hydro Bazooka', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Psyduck', tipo: 'agua', nIdentificao: '057', habilidades: 'Headache', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Golduck', tipo: 'agua', nIdentificao: '058', habilidades: 'Aqua Edge', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Poliwag', tipo: 'agua', nIdentificao: '059', habilidades: 'Razor Fin', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Poliwhirl', tipo: 'agua', nIdentificao: '060', habilidades: 'Knuckle Punch', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Poliwrath', tipo: 'agua', nIdentificao: '061', habilidades: 'Counterattack and Mega Punch', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Tentacool', tipo: 'agua', nIdentificao: '062', habilidades: 'Gentle Slap', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Tentacruel', tipo: 'agua', nIdentificao: '063', habilidades: 'Poison Tentacles', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Seel', tipo: 'agua', nIdentificao: '064', habilidades: 'Headbutt', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dewgong', tipo: 'agua', nIdentificao: '065', habilidades: 'Surf', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Shellder', tipo: 'agua', nIdentificao: '066', habilidades: 'Tongue Slap', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Cloyster', tipo: 'agua', nIdentificao: '067', habilidades: 'Shell Armor and Surf', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Krabby', tipo: 'agua', nIdentificao: '068', habilidades: 'Vise Grip', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Kingler', tipo: 'agua', nIdentificao: '069', habilidades: 'KO Crab', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Horsea', tipo: 'agua', nIdentificao: '070', habilidades: 'Water Gun', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Seadra', tipo: 'agua', nIdentificao: '071', habilidades: 'Water Arrow', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Goldeen', tipo: 'agua', nIdentificao: '072', habilidades: 'Flop', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Seaking', tipo: 'agua', nIdentificao: '073', habilidades: 'Horn Hazard', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Staryu', tipo: 'agua', nIdentificao: '074', habilidades: 'Smack', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Starmie', tipo: 'agua', nIdentificao: '075', habilidades: 'Wave Splash', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Starmie EX', tipo: 'agua', nIdentificao: '076', habilidades: 'Hydro Splash', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Magikarp', tipo: 'agua', nIdentificao: '077', habilidades: 'Splash', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Gyarados', tipo: 'agua', nIdentificao: '078', habilidades: 'Hyper Beam', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Lapras', tipo: 'agua', nIdentificao: '079', habilidades: 'Hydro Pump', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Vaporeon', tipo: 'agua', nIdentificao: '080', habilidades: 'Bubble Drain', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Omanyte', tipo: 'agua', nIdentificao: '081', habilidades: 'Water Gun', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Omastar', tipo: 'agua', nIdentificao: '082', habilidades: 'Ancient Whirlpool', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Articuno', tipo: 'agua', nIdentificao: '083', habilidades: 'Ice Beam', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Articuno EX', tipo: 'agua', nIdentificao: '084', habilidades: 'Ice Wing and Blizzard', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Ducklett', tipo: 'agua', nIdentificao: '085', habilidades: 'Flap', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Swanna', tipo: 'agua', nIdentificao: '086', habilidades: 'Wing Attack', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Froakie', tipo: 'agua', nIdentificao: '087', habilidades: 'Flop', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Frogadier', tipo: 'agua', nIdentificao: '088', habilidades: 'Water Drip', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Greninja', tipo: 'agua', nIdentificao: '089', habilidades: 'Water Shuriken and Mist Slash', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Pyukumuku', tipo: 'agua', nIdentificao: '090', habilidades: 'Rain Splash', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Bruxish', tipo: 'agua', nIdentificao: '091', habilidades: 'Second Strike', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Snom', tipo: 'agua', nIdentificao: '092', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Frosmoth', tipo: 'agua', nIdentificao: '093', habilidades: 'Powder Snow', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Pikachu', tipo: 'elétrico', nIdentificao: '094', habilidades: 'Gnaw', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Raichu', tipo: 'elétrico', nIdentificao: '095', habilidades: 'Thunderbolt', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Pikachu EX', tipo: 'elétrico', nIdentificao: '096', habilidades: 'Circle Circuit', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Magnemite', tipo: 'elétrico', nIdentificao: '097', habilidades: 'Lightning Ball', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Magneton', tipo: 'elétrico', nIdentificao: '098', habilidades: 'Volt Charge and Spinning Attack', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Voltorb', tipo: 'elétrico', nIdentificao: '099', habilidades: 'Tackle', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Electrode', tipo: 'elétrico', nIdentificao: '100', habilidades: 'Electro Ball', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Electabuzz', tipo: 'elétrico', nIdentificao: '101', habilidades: 'Thunder Punch', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Jolteon', tipo: 'elétrico', nIdentificao: '102', habilidades: 'Pin Missile', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Zapdos', tipo: 'elétrico', nIdentificao: '103', habilidades: 'Raging Thunder', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Zapdos EX', tipo: 'elétrico', nIdentificao: '104', habilidades: 'Peck and Thundering Hurricane', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Blitzle', tipo: 'elétrico', nIdentificao: '105', habilidades: 'Zap Kick', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Zebstrika', tipo: 'elétrico', nIdentificao: '106', habilidades: 'Thunder Spear', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Tynamo', tipo: 'elétrico', nIdentificao: '107', habilidades: 'Tiny Charge', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Eelektrik', tipo: 'elétrico', nIdentificao: '108', habilidades: 'Head Bolt', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Eelektross', tipo: 'elétrico', nIdentificao: '109', habilidades: 'Thunder Fang', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Helioptile', tipo: 'elétrico', nIdentificao: '110', habilidades: 'Tail Whap', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Heliolisk', tipo: 'elétrico', nIdentificao: '111', habilidades: 'Quick Attack', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Pincurchin', tipo: 'elétrico', nIdentificao: '112', habilidades: 'Thunder Shock', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Clefairy', tipo: 'psíquico', nIdentificao: '113', habilidades: 'Slap', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Clefable', tipo: 'psíquico', nIdentificao: '114', habilidades: 'Magical Shot', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Abra', tipo: 'psíquico', nIdentificao: '115', habilidades: 'Teleport', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Kadabra', tipo: 'psíquico', nIdentificao: '116', habilidades: 'Super Psy Bolt', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Alakazam', tipo: 'psíquico', nIdentificao: '117', habilidades: 'Psychic', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Slowpoke', tipo: 'psíquico', nIdentificao: '118', habilidades: 'Tail Whap', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Slowbro', tipo: 'psíquico', nIdentificao: '119', habilidades: 'Super Psy Bolt', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Gastly', tipo: 'psíquico', nIdentificao: '120', habilidades: 'Suffocating Gas', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Haunter', tipo: 'psíquico', nIdentificao: '121', habilidades: 'Will-O-Wisp', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Gengar', tipo: 'psíquico', nIdentificao: '122', habilidades: 'Bother', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Gengar EX', tipo: 'psíquico', nIdentificao: '123', habilidades: 'Shadowy Spellbind and Spooky Shot', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Drowzee', tipo: 'psíquico', nIdentificao: '124', habilidades: 'Mumble', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Hypno', tipo: 'psíquico', nIdentificao: '125', habilidades: 'Sleep Pendulum and Psypunch', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Mr. Mime', tipo: 'psíquico', nIdentificao: '126', habilidades: 'Barrier Attack', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Jynx', tipo: 'psíquico', nIdentificao: '127', habilidades: 'Psychic', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Mewtwo', tipo: 'psíquico', nIdentificao: '128', habilidades: 'Power Blast', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Mewtwo EX', tipo: 'psíquico', nIdentificao: '129', habilidades: 'Psychic Sphere and Psydrive', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Ralts', tipo: 'psíquico', nIdentificao: '130', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Kirlia', tipo: 'psíquico', nIdentificao: '131', habilidades: 'Smack', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Gardevoir', tipo: 'psíquico', nIdentificao: '132', habilidades: 'psy Shadow and Psyshot', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Woobat', tipo: 'psíquico', nIdentificao: '133', habilidades: 'Gnaw', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Swoobat', tipo: 'psíquico', nIdentificao: '134', habilidades: 'Heart Stamp', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Golett', tipo: 'psíquico', nIdentificao: '135', habilidades: 'Mega Punch', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Golurk', tipo: 'psíquico', nIdentificao: '136', habilidades: 'Double Lariat', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Sandshrew', tipo: 'lutador', nIdentificao: '137', habilidades: 'Scratch', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Sandslash', tipo: 'lutador', nIdentificao: '138', habilidades: 'Slash', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Diglett', tipo: 'lutador', nIdentificao: '139', habilidades: 'Mud-Slap', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dugtrio', tipo: 'lutador', nIdentificao: '140', habilidades: 'Dig', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Mankey', tipo: 'lutador', nIdentificao: '141', habilidades: 'Low Kick', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Primeape', tipo: 'lutador', nIdentificao: '142', habilidades: 'Fight Back', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Machop', tipo: 'lutador', nIdentificao: '143', habilidades: 'Knuckle Punch', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Machoke', tipo: 'lutador', nIdentificao: '144', habilidades: 'Strength', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Machamp', tipo: 'lutador', nIdentificao: '145', habilidades: 'Seismic Toss', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Machamp EX', tipo: 'lutador', nIdentificao: '146', habilidades: 'Mega Punch', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Geodude', tipo: 'lutador', nIdentificao: '147', habilidades: 'Tackle', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Graveler', tipo: 'lutador', nIdentificao: '148', habilidades: 'Rollout', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Golem', tipo: 'lutador', nIdentificao: '149', habilidades: 'Double-Edge', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Onix', tipo: 'lutador', nIdentificao: '150', habilidades: 'Land Crush', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Cubone', tipo: 'lutador', nIdentificao: '151', habilidades: 'Growl', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Marowak', tipo: 'lutador', nIdentificao: '152', habilidades: 'Bone Beatdown', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Marowak', tipo: 'lutador', nIdentificao: '153', habilidades: 'Bonemerang', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Hitmonlee', tipo: 'lutador', nIdentificao: '154', habilidades: 'Stretch Kick', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Hitmonchan', tipo: 'lutador', nIdentificao: '155', habilidades: 'Jab', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Rhyhorn', tipo: 'lutador', nIdentificao: '156', habilidades: 'Tackle', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Rhydon', tipo: 'lutador', nIdentificao: '157', habilidades: 'Horn Drill', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Kabuto', tipo: 'lutador', nIdentificao: '158', habilidades: 'Shell Attack', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Kabutops', tipo: 'lutador', nIdentificao: '159', habilidades: 'Leech Life', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Mienfoo', tipo: 'lutador', nIdentificao: '160', habilidades: 'Pound', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Mienshao', tipo: 'lutador', nIdentificao: '161', habilidades: 'Spiral Kick', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Knuckle Punch', tipo: 'lutador', nIdentificao: '162', habilidades: 'Knuckle Punch', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Grapploct', tipo: 'lutador', nIdentificao: '163', habilidades: 'Knock Back', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Ekans', tipo: 'sombrio', nIdentificao: '164', habilidades: 'Bite', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Arbok', tipo: 'sombrio', nIdentificao: '165', habilidades: 'Corner', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Nidoran', tipo: 'sombrio', nIdentificao: '166', habilidades: 'Call for Family', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Nidorina', tipo: 'sombrio', nIdentificao: '167', habilidades: 'Bite', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Nidoqueen', tipo: 'sombrio', nIdentificao: '168', habilidades: 'Lovestrike', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Nidoran', tipo: 'sombrio', nIdentificao: '169', habilidades: 'Peck', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Nidorino', tipo: 'sombrio', nIdentificao: '170', habilidades: 'Horn Attack', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Nidoking', tipo: 'sombrio', nIdentificao: '171', habilidades: 'Poison Horn', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Zubat', tipo: 'sombrio', nIdentificao: '172', habilidades: 'Glide', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Golbat', tipo: 'sombrio', nIdentificao: '173', habilidades: 'Wing Attack', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Grimer', tipo: 'sombrio', nIdentificao: '174', habilidades: 'Poison Gas', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Muk', tipo: 'sombrio', nIdentificao: '175', habilidades: 'Venoshock', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Koffing', tipo: 'sombrio', nIdentificao: '176', habilidades: 'Suffocating Gas', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Weezing', tipo: 'sombrio', nIdentificao: '177', habilidades: 'Gas Leak and Tackle', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Mawile', tipo: 'metal', nIdentificao: '178', habilidades: 'Crunch', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Pawniard', tipo: 'metal', nIdentificao: '179', habilidades: 'Pierce', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Bisharp', tipo: 'metal', nIdentificao: '180', habilidades: 'Metal Claw', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Meltan', tipo: 'metal', nIdentificao: '181', habilidades: 'Amass', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Melmetal', tipo: 'metal', nIdentificao: '182', habilidades: 'Hard Coat and Heavy Impact', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'dragão', nIdentificao: '183', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dragonair', tipo: 'dragão', nIdentificao: '184', habilidades: 'Tail Smack', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dragonite', tipo: 'dragão', nIdentificao: '185', habilidades: 'Draco Meteor', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Pidgey', tipo: 'normal', nIdentificao: '186', habilidades: 'Gust', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '187', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '188', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '189', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '190', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '191', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '192', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '193', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '194', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '195', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '196', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '197', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '198', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '199', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '200', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '201', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '202', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '203', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '204', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '205', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '206', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '207', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '208', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '209', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '210', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '211', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '212', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '213', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '214', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Dratini', tipo: 'normal', nIdentificao: '215', habilidades: 'Ram', colecao: 'Dominação Genética', categoria: 'Pokemon' },
    { nome: 'Helix Fossil', tipo: 'item', nIdentificao: '216', habilidades: 'play this card as if it were a 40-HP Basic pokemon', colecao: 'Dominação Genética', categoria: 'treinador' }
];

function buscarCarta(codigo) {
    const posicao = parseInt(codigo, 10) - 1;

    if (posicao >= 0 && posicao < listaPokemon.length) {
        return listaPokemon[posicao];
    } else {
        return "Código inválido";
    }
}

function main(){

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEvento (evento){
        evento.preventDefault();
        const NCarta = form.querySelector('.NCarta');
        cartaEscolhida = NCarta.value;
        const result = buscarCarta(cartaEscolhida);
        resultado.innerHTML = `A carta ${result.nIdentificao} é o ${result.categoria} ${result.nome}, sendo do tipo ${result.tipo} com a(s) habilidade(s) ${result.habilidades} e pertencendo a coleção ${result.colecao}`;
    }

    form.addEventListener('submit', recebeEvento);

}

main();

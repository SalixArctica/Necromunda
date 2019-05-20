const graphql = require('graphql');
const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLInt,
    GraphQLList 
} = graphql;
const data = require('./dummyData.json');
const weapons = require('./weapons.json');
const _ = require('lodash');

const UnitType = new GraphQLObjectType({
    name: 'Unit',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        rank: { type: GraphQLString },
        move: { type: GraphQLInt },
        weaponSkill: { type: GraphQLInt },
        ballisticsSkill: { type: GraphQLInt },
        strength: { type: GraphQLInt },
        toughness: { type: GraphQLInt },
        wounds: { type: GraphQLInt },
        initiative: { type: GraphQLInt },
        attacks: { type: GraphQLInt },
        leadership: { type: GraphQLInt },
        cool: { type: GraphQLInt },
        willpower: { type: GraphQLInt },
        intelligence: { type: GraphQLInt },
        skills: { type: new GraphQLList(GraphQLString) },
        weapons: { 
            type: new GraphQLList(WeaponType),
            resolve(parent, args) {
                return parent.weapons.map(weapon => {
                    _.find(weapons, {name: weapon});
                })
            } 
        }
    })
});

const WeaponType = new GraphQLObjectType({
    name: 'Weapon',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        SR: { type: GraphQLString },
        LR: { type: GraphQLString },
        SA: { type: GraphQLString },
        LA: { type: GraphQLString },
        Str: { type: GraphQLString },
        AP: { type: GraphQLString },
        D: { type: GraphQLString },
        Ammo: { type: GraphQLString },
        Traits: { type: new GraphQLList(GraphQLString) }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        unit: {
            type: UnitType,
            args: {
                name: { type: GraphQLString }
            },
            resolve(patent, args) {
                //code to get data from db
                return _.find(data,{name: args.name});
            }
        },
        weapon: {
            type: WeaponType,
            args: {
                name: { type: GraphQLString }
            },
            resolve(parent, args) {
                return _.find(weapons, {name: args.name});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
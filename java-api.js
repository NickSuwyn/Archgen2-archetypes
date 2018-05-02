module.exports = function(a2) {
  return {

    createGetters: function(entity) {
      result = '';
      entity.props.forEach(p => result += `
  public ${p.type} get${a2.capFirst(p.name)}() {
    return ${p.name};
  }`);
      return result;
    },

    createSetters: function(entity) {
      result = '';
      entity.props.forEach(p => result += `
  public void set${a2.capFirst(p.name)}(${p.type} ${p.name}) {
    this.${p.name} = ${p.name};
  }`)
        return result;
    },

    createGettersAndSetters: function(entity) {
      return this.createGetters(entity) + this.createSetters(entity);
    }

  };
}

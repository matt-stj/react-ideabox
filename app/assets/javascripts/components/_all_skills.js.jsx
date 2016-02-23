var AllSkills = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  handleEdit() {
    var id      = this.props.skill.id;
    var name    = this.refs.name.value;
    var details = this.refs.details.value;
    var level   = this.props.skill.level;

    var skill = {id: id, name: name, details: details, level: level }
  },

  handleUpdate(skill) {
  console.log(skill, 'in handleUpdate');
},

render() {
  return (
    <div>
      <NewSkill handleSubmit={this.handleSubmit} />
      <AllSkills skills={this.state.skills}
                 handleDelete={this.handleDelete}
                 onUpdate={this.handleUpdate} />
    </div>
  )
}
});

var AllSkills = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  onUpdate(skill) {
    this.props.onUpdate(skill)
},

render() {
    var skills = this.props.skills.sort(function(a, b) {
      return a.id - b.id;
      }).map((skill) => {

      return (
        <div key={skill.id}>
          <Skill skill={skill}
                 handleDelete={this.handleDelete.bind(this, skill.id)}
                 handleEdit={this.onUpdate} />
        </div>
      )
    });
  return (
    <div>
      {skills}
    </div>
  )
}

});

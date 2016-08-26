var React=require("react");

var GmailComponent2= React.createClass({
  handleLabelId: function()
  {
    this.props.submitLabelId({lableId:this.props.data.id});
  },
  render: function() {
    return (
      <td id="btnpad"><a onClick={this.handleLabelId} className="btn btn-link">{this.props.data.name}</a></td>
    );
  }
});
module.exports=GmailComponent2;

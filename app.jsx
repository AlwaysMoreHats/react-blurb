var React = require('react');
var Blurb = require('./blurb.jsx');

require('./style.css');


var children = [];

for (var i=0; i<5; i++)
{
  children.push(
    <Blurb title="Lorem Ipsum" summary="Just some meaningless greeking text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id massa
      semper, vestibulum urna at, finibus turpis. Etiam ut suscipit orci,
      volutpat pretium arcu. Quisque at ipsum quam. Mauris aliquam dui ac
      ornare pharetra. In facilisis libero sed ipsum posuere luctus. Vestibulum
      ornare rutrum pharetra. Ut in elit felis. Cras malesuada ullamcorper leo,
      in cursus orci condimentum molestie. Duis eleifend egestas magna, at
      iaculis lorem interdum et. Proin feugiat ac mauris vel commodo. Nunc ut
      enim congue, gravida lectus in, cursus turpis. Duis vitae est et erat
      mollis suscipit. Donec ultrices, quam eget eleifend accumsan, mauris urna
      porta quam, ac posuere leo erat ac risus. Curabitur a arcu elementum,
      ultrices quam eget, mattis lectus.
    </Blurb>
  );
}

React.render(<div>{children}</div>, document.getElementById('content'))
react-blurb 
===========

Version: 0.1.0

React component that allows you to show a preview or summary of content until the user clicks to see
the full content. Currently ugly, but technically works.

Usage
=====

Example
-------
    <Blurb title="Lorem Ipsum" summary="Just some meaningless greeking text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id massa
      semper, vestibulum urna at, finibus turpis. Etiam ut suscipit orci,
      ...
    </Blurb>

Details
-------

Blurb expects a title (a string, and required), summary (also a string, but not required), and children
(basically whatever you want, not *technically* required but why are you using this otherwise).

Clicking the Blurb will expand it into its full content. The title will always be displayed.

Styling
=======

* The entire element is a `div` with class 'blurb'
* The title is an `h1` with class 'blurb-title'
* The content is in a 'div' with class 'blurb-display'
    * If unexpanded, this also has the class 'blurb-summary'
    * If expanded, this also has the class 'blurb-full'

Planned Features
================

* Lightbox/Letterbox/Modal/Whatever that thing is called.
* Adding callbacks on click/etc.
* Summary can be an element and not just string.
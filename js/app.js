/** @jsx React.DOM */

var RootComponent = React.createClass({displayName: "RootComponent",
  ToggleMenu: function(){
    SideMenu.toggle(document.querySelector('.sidemenu'));
  },

  getInitialState: function(){

    return({
      SettingsToggle: true
    })

  },

  render: function(){
    return (
      React.createElement("div", null,

      React.createElement("div", {className: "sidemenu", hidden: true},

      React.createElement("div", {className: "sidemenu-hero fade"},

      React.createElement("img", {className: "avatar", src: "img/avatar.jpg"}),
      React.createElement("img", {className: "sidemenu-hero-image", src: "img/sidemenu-hero.jpg"})

      ),

      React.createElement("ul", {className: "menu"},
      React.createElement("li", {className: "ripple"}, React.createElement("a", {href: "index.html"}, React.createElement("i", {className: "icon-home"}), "Home")),
      React.createElement("li", {className: "divider"}),
      React.createElement("li", {className: "ripple"}, React.createElement("a", {target: "_blank", href: "http://rabbi.xyz/"}, React.createElement("i", {className: "icon-post-blogger"}), "Blog")),
      React.createElement("li", {className: "divider"}),
      React.createElement("li", {className: "ripple"}, React.createElement("a", {target: "_blank", href: "http://github.com/rabbihossain/"}, React.createElement("i", {className: "icon-drive-code"}), "Github")),
      React.createElement("li", {className: "divider"}),
      React.createElement("li", {className: "ripple"}, React.createElement("a", {target: "_blank", href: "http://www.facebook.com/rabby.hossain"}, React.createElement("i", {className: "icon-post-facebook"}), "Facebook")),
      React.createElement("li", {className: "divider"}),
      React.createElement("li", {className: "ripple"}, React.createElement("a", {target: "_blank", href: "http://twitter.com/r4bb1h/"}, React.createElement("i", {className: "icon-post-twitter"}), "Twitter")),
      React.createElement("li", {className: "divider"}),
      React.createElement("li", {className: "ripple"}, React.createElement("a", {target: "_blank", href: "http://bd.linkedin.com/in/rabbihossain"}, React.createElement("i", {className: "icon-post-linkedin"}), "Linked In")),
      React.createElement("li", {className: "divider"})

      )

      ),

      React.createElement("div", {className: "toolbar bg-red-500 color-white"},

      React.createElement("button", {className: "icon-button", onClick: this.ToggleMenu}, React.createElement("i", {className: "icon-menu"})),

      React.createElement("span", {className: "toolbar-label"}, myXHRData.Name)

      ),

       this.state.SettingsToggle ? React.createElement(FrontComponent, null) : React.createElement(AboutComponent, null)

      )
    );
  }

})
var FrontComponent = React.createClass({displayName: "FrontComponent",
  handleToggle: function(){
    RootRender.setState({
      SettingsToggle: false
    })
  },
  render: function(){
    return(
      React.createElement("div", {className: "FrontContainer"},

      React.createElement("h1", {className: "bigtext"}, "Hi!"),
      React.createElement("h1", {className: "subtitletext"}, " Are You Looking For Me?"),

      React.createElement("div", {className: "button-container"},

      React.createElement("button", {className: "btn-btn button raised bg-blue-500 color-white", onClick: this.handleToggle}, React.createElement("i", {className: "icon-forward"}), "Next")

      )

      )
    )
  }
});
var AboutComponent = React.createClass({displayName: "AboutComponent",

  render: function(){

    return(

      React.createElement("div", {className: "AboutContainer"},

      React.createElement("div", {className: "info"},
      React.createElement("blockquote", {className: "information"},
      "Hello, I am ", React.createElement("b", null, "Rabbi Hossain"), ". I am Basically a Javascript coder working with ", React.createElement("a", {className: "button linked color-deep-orange-500", target: "_blank", href: "http://krossware.com/"}, React.createElement("b", null, "Krossware")), " as a ", React.createElement("b", null, "WebApps Developer"), ". I am kinda addicted to building cross-platform client side apps."
      ),
      React.createElement("blockquote", {className: "information"},
      "I am just another FOSS enthusiast guy ", React.createElement("a", {className: "button linked color-deep-orange-500", target: "_blank", href: "https://bugzilla.mozilla.org/buglist.cgi?query_format=advanced&emailtype1=exact&emailassigned_to1=1&email1=me%402hr.me&list_id=12077765"}, "contributing in ", React.createElement("b", null, "Mozilla")), ". Love to fiddle with new technologies. While I don't have any works to do, I love to write ", React.createElement("a", {className: "button linked color-deep-orange-500", target: "_blank", href: "http://rabbi.xyz/"}, React.createElement("b", null, "tutorials")), " and listen rock music."
      )
      ),

      React.createElement("div", {className: "gitlog card"},

      React.createElement("ul", {className: "list"},

      React.createElement("li", {className: "ripple gitList"},
      React.createElement("img", {className: "item-icon", src: "img/gitlog.png"}),
      React.createElement("span", {className: "item-text"},
      gitXHRData[0].type, " ", React.createElement("a", {target: "_blank", href: "http://github.com/" + gitXHRData[0].repo.name}, gitXHRData[0].repo.name),
      React.createElement("span", {className: "secondary-text"},
      new Date(gitXHRData[0].created_at).toDateString(), " - ", new Date(gitXHRData[0].created_at).toLocaleTimeString()
      )
      )
      ),

      React.createElement("li", {className: "ripple gitList"},
      React.createElement("img", {className: "item-icon", src: "img/gitlog.png"}),
      React.createElement("span", {className: "item-text"},
      gitXHRData[1].type, " ", React.createElement("a", {target: "_blank", href: "http://github.com/" + gitXHRData[1].repo.name}, gitXHRData[1].repo.name),
      React.createElement("span", {className: "secondary-text"},
      new Date(gitXHRData[1].created_at).toDateString(), " - ", new Date(gitXHRData[1].created_at).toLocaleTimeString()
      )
      )
      ),

      React.createElement("li", {className: "ripple gitList"},
      React.createElement("img", {className: "item-icon", src: "img/gitlog.png"}),
      React.createElement("span", {className: "item-text"},
      gitXHRData[2].type, " ", React.createElement("a", {target: "_blank", href: "http://github.com/" + gitXHRData[2].repo.name}, gitXHRData[2].repo.name),
      React.createElement("span", {className: "secondary-text"},
      new Date(gitXHRData[2].created_at).toDateString(), " - ", new Date(gitXHRData[2].created_at).toLocaleTimeString()
      )
      )
      ),

      React.createElement("li", {className: "ripple gitList"},
      React.createElement("img", {className: "item-icon", src: "img/gitlog.png"}),
      React.createElement("span", {className: "item-text"},
      gitXHRData[3].type, " ", React.createElement("a", {target: "_blank", href: "http://github.com/" + gitXHRData[3].repo.name}, gitXHRData[3].repo.name),
      React.createElement("span", {className: "secondary-text"},
      new Date(gitXHRData[3].created_at).toDateString(), " - ", new Date(gitXHRData[3].created_at).toLocaleTimeString()
      )
      )
      ),

      React.createElement("li", {className: "ripple gitList"},
      React.createElement("img", {className: "item-icon", src: "img/gitlog.png"}),
      React.createElement("span", {className: "item-text"},
      gitXHRData[4].type, " ", React.createElement("a", {target: "_blank", href: "http://github.com/" + gitXHRData[4].repo.name}, gitXHRData[4].repo.name),
      React.createElement("span", {className: "secondary-text"},
      new Date(gitXHRData[4].created_at).toDateString(), " - ", new Date(gitXHRData[4].created_at).toLocaleTimeString()
      )
      )
      ),

      React.createElement("li", {className: "ripple gitList"},
      React.createElement("img", {className: "item-icon", src: "img/gitlog.png"}),
      React.createElement("span", {className: "item-text"},
      gitXHRData[5].type, " ", React.createElement("a", {target: "_blank", href: "http://github.com/" + gitXHRData[5].repo.name}, gitXHRData[5].repo.name),
      React.createElement("span", {className: "secondary-text"},
      new Date(gitXHRData[5].created_at).toDateString(), " - ", new Date(gitXHRData[5].created_at).toLocaleTimeString()
      )
      )
      ),

      React.createElement("li", {className: "ripple gitList"},
      React.createElement("img", {className: "item-icon", src: "img/gitlog.png"}),
      React.createElement("span", {className: "item-text"},
      gitXHRData[6].type, " ", React.createElement("a", {target: "_blank", href: "http://github.com/" + gitXHRData[6].repo.name}, gitXHRData[6].repo.name),
      React.createElement("span", {className: "secondary-text"},
      new Date(gitXHRData[6].created_at).toDateString(), " - ", new Date(gitXHRData[6].created_at).toLocaleTimeString()
      )
      )
      ),

      React.createElement("li", {className: "ripple gitList"},
      React.createElement("img", {className: "item-icon", src: "img/gitlog.png"}),
      React.createElement("span", {className: "item-text"},
      gitXHRData[7].type, " ", React.createElement("a", {target: "_blank", href: "http://github.com/" + gitXHRData[7].repo.name}, gitXHRData[7].repo.name),
      React.createElement("span", {className: "secondary-text"},
      new Date(gitXHRData[7].created_at).toDateString(), " - ", new Date(gitXHRData[7].created_at).toLocaleTimeString()
      )
      )
      )

      )

      )

      )

    )

  }

});
var RootRender = React.render(
  React.createElement(RootComponent, null),
  document.getElementById('app')
);

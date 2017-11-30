import React from 'react';

class ShortcutsNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shortcuts: []
    };
  }

  comparator(property, backwards) {
    let a, b;
    return function (x, y) {
      a = (typeof x[property] === 'string') ?
       x[property].toLowerCase() : x[property];
      b = (typeof y[property] === 'string') ?
       y[property].toLowerCase() : y[property];
      if (a > b) {
        if (backwards) {
          return -1;
        } else {
          return 1;
        }
      } else {
        if (backwards) {
          return 1;
        } else {
          return -1;
        }
      }
    };
  }

  sortShortcuts(shortcuts, property, backwards) {
    shortcuts.sort(this.comparator(property, backwards));
    this.setState({
      shortcuts
    });
  }

  componentWillReceiveProps (newProps) {
    if (newProps.barNavType === 'shortcuts') {
      const nav = document.getElementById('shortcutsNav');
      nav.classList.add('secondary-nav-container-show');
      if (this.props.barNavType === 'notes') {
        const modal = document.getElementById('modalBackground');
        modal.classList.add('secondary-nav-background-show');
      }
      this.sortShortcuts(newProps.shortcuts, "createdAt");
    } else {
      const nav = document.getElementById('shortcutsNav');
      nav.classList.remove('secondary-nav-container-show');
      if (newProps.barNavType === 'notes') {
        const modal = document.getElementById('modalBackground');
        modal.classList.remove('secondary-nav-background-show');
      }
    }
  }

  selectElement(shortcut) {
    if (shortcut.type.toLowerCase() === 'note') {
      this.props.selectNote(this.props.notes[shortcut.shortcut_element_id]);
    } else if (shortcut.type.toLowerCase() === 'notebook') {
      this.props.selectNotebook(shortcut.shortcut_element_id);
    } else if (shortcut.type.toLowerCase() === 'tag') {
      this.props.selectTag(shortcut.shortcut_element_id);
    }
  }

  render() {
    return (
      <div id='shortcutsNav' className="secondary-nav-container">
        <header className='notebooks-header'>
          <h4>SHORTCUTS</h4>
        </header>
        <div className='shortcuts-nav'>
          {
            this.props.shortcuts.map(shortcut => (
              <article key={shortcut.id} onClick={() => this.selectElement(shortcut)}>
                <span className={`shortcut-icon-${shortcut.type.toLowerCase()}`}></span>
                  <p>{(this.props[`${shortcut.type.toLowerCase()}s`][shortcut.shortcut_element_id]) ?
                      this.props[`${shortcut.type.toLowerCase()}s`][shortcut.shortcut_element_id].title : null
                    }</p>
              </article>
            ))
          }
        </div>
      </div>
    );
  }
}

export default ShortcutsNav;

const fs = require('fs');

let workDir = process.env.INIT_CWD;
const name = process.argv[2];

if (!name) {
  console.error(`Please provide a name. Example:`);
  console.error(`npm run scaffold Test`);
  process.exit();
}

workDir = `${workDir}/${name}`;

if (!fs.existsSync(workDir)) {
  fs.mkdirSync(workDir);
}

const componentTemplate = `import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './${name}.css';

class ${name} extends Component {
  render() {
    const { prop } = this.props;
    return (
      <div className={styles.${name}}>
        <span>{prop}</span>
      </div>
    );
  }
}

${name}.propTypes = {
  prop: PropTypes.string.isRequired,
};

export default ${name};
`;

const specTemplate = `import React from 'react';
import { shallow } from 'enzyme';
import ${name} from './${name}';

describe('<${name} />', () => {
  const build = passedProps => {
    const defaultProps = {};
    return shallow(<${name} {...defaultProps} {...passedProps} />);
  };

  it('should render', () => {
    const component = build();
    expect(component).toMatchSnapshot();
  });
});
`;

const cssTemplate = `.${name} {

}`;

const writeFile = (filename, content) => {
  fs.writeFile(`${workDir}/${filename}`, content, err => {
    if (err) {
      console.log(err);
    }
  });
};

writeFile(`${name}.js`, componentTemplate);
writeFile(`${name}.css`, cssTemplate);
writeFile(`${name}.spec.js`, specTemplate);

console.log(`Component ${name} is created.`);

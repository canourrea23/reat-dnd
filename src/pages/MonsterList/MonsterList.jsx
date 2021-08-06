import React, { Component } from "react";
// Name the function, we'll go write it next
import { getMonsterList } from "../../services/api-calls";
import { Link } from "react-router-dom";

class MonsterList extends Component {
  state = {
    monsterList: [],
  };

  async componentDidMount() {
    // Make the API call
    const monsterList = await getMonsterList();
    // Then set state
    this.setState({ monsterList: monsterList.results });
  }
  render() {
    return (
        <>
            <h3>Monster List (OMG SCARY)</h3>
            {/* Then we map the state to Links! */}
            {this.state.monsterList.map((monster) => (
            <div key={monster.index}>
                <Link
                    to={{
                    // This is the next step in our plan!
                    pathname: `/monster`,
                    // Pass the state via location so we can access our monster in the MonsterDetails 'page'
                    state: { monster },
                    }}
                > 
                    {monster.name}
                </Link><br></br>
            </div>
            ))}
        </>
    );
  }
}

export default MonsterList;
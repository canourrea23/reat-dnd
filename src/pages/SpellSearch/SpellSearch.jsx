import React, { Component } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { spellSearch } from "../../services/api-calls";


class SpellSearch extends Component {
    state = {
        spells: [],
    };
    handleSpellSearch = async (formData) => {
        const spells = await spellSearch(formData);
        console.log(spells.results);
        this.setState({ spells: spells.results });
    };

    render() {
        return (
        <>
            <h3>Such Spellz</h3>
                    <SearchForm />
        </>
        );
    }
}

export default SpellSearch;
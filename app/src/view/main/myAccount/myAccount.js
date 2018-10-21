import React from 'react';

import { Layout, Col, Row, Card, Icon, Modal, Form, Input, Select } from 'antd';

// import Style from './myAccount.less';
// import FacebookCard from '../../../components/facebookCard';
// import TwitterCard from '../../../components/twitterCard';
// import GoogleCard from '../../../components/googleCard';


import Meteo from '../services/meteo';
import Bourse from '../services/bourse';
import Steam from '../services/steam';
import News from '../services/news';
import FootBall from '../services/football';

const FormItem = Form.Item;
const Option = Select.Option;

const servicesWidget = {
    weather: {
        city: ["Paris", "Lille", "London"],
    },
    bourse: {
        crypto: [{
            name: "ETH",
            conversion: "USD"
        }, {
            name: "BTC",
            conversion: "USD"
        }]
    },
    steam: {
        steamId: ["76561198092225820"],
    },
    news: {
        infoType: ['business'],
    },
    football: {
        bestSoccer: [],
    }
};

const MeteoForm = ({ handleInputChange, inputCity }) => {
    return (
        <div style={{ display: "block" }}>
            <label style={{ display: "inline-block", fontWeight: "bold", color: "#1890ff" }}>Ville : </label>
            <Input type="text" placeholder="Entrez le nom d'une ville" name="inputCity"
                onChange={handleInputChange} value={inputCity} style={{ width: "50%", margin: 10, display: "inline-block" }} />
        </div>
    );
}

const SteamForm = ({ handleInputChange, inputSteamId }) => {
    return (
        <div style={{ display: "block" }}>
            <label style={{ display: "inline-block", fontWeight: "bold", color: "#1890ff" }}>STEAM_ID : </label>
            <Input type="text" placeholder="Entrez le steam ID d'un utilisateur" name="inputSteamId"
                onChange={handleInputChange} value={inputSteamId} style={{ width: "50%", margin: 10, display: "inline-block" }} />
        </div>
    );
}


const FootBallForm = ({handleChangeFoot, footTeams }) => {    
    return (
        <div style={{ display: "block" }}>
            <label style={{ display: "inline-block", fontWeight: "bold", color: "#1890ff" }}>Listes des equipes : </label>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Sélectionner un themes"
                optionFilterProp="children"
                onChange={handleChangeFoot}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >

                {footTeams.map(footBallTeam => {
            return (
                <Option key={footBallTeam.country_id} value={footBallTeam.country_id}>{footBallTeam.country_name}</Option>
            )
            
            })}
            </Select>
        </div>
    );
}


const NewsForm = ({handleChangeNews}) => {

    return (
        <div style={{ display: "block" }}>
            <label style={{ display: "inline-block", fontWeight: "bold", color: "#1890ff" }}>Themes de journaux : </label>
                    
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Sélectionner un themes"
                optionFilterProp="children"
                onChange={handleChangeNews}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >

                <Option value="business">Economie / Business</Option>

            </Select>
        </div>
    );
}

const BourseForm = ({ handleInputChange, inputTarget, inputCrypto }) => {
    return (
        <Layout style={{ background: "white" }}>
            <div style={{ display: "block" }}>
                <label style={{ display: "inline-block", fontWeight: "bold", color: "#1890ff" }}>Devise : </label>
                <Input type="text" placeholder="Entrez la devise" name="inputTarget"
                    onChange={handleInputChange} value={inputTarget} style={{ display: "inline-block", width: "50%", margin: 10 }} />
            </div>
            <div style={{ display: "block" }}>
                <label style={{ displaySteamID: "inline-block", fontWeight: "bold", color: "#1890ff" }}>Crypto : </label>
                <Input type="text" placeholder="Entrez le nom d'une crypto" name="inputCrypto"
                    onChange={handleInputChange} value={inputCrypto} style={{ display: "inline-block", width: "50%", margin: 10 }} />
            </div>
        </Layout>
    );
}

class MyAccount extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            services: servicesWidget,
            selectValue: "",
            selectNews: "",
            inputCity: "",
            inputCrypto: "",
            inputTarget: "",
            inputSteamId: "",
            selectFoot: "",
            footTeams: [],
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeNews = this.handleChangeNews.bind(this);
        this.handleChangeFoot = this.handleChangeFoot.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.meteo = React.createRef();
        this.bourse = React.createRef();
        this.steam = React.createRef();
        this.news = React.createRef();
        this.football = React.createRef();
    }

    getSoccer = async () => {
        const api_call = await fetch(`https://apifootball.com/api/?action=get_countries&APIkey=8b887218abab28840d0c3173840b63b3e501ce7bb9d7ee1a796f44cd290059af`);
        const data = await api_call.json();
        this.setState({
            footTeams: data
        })
        console.log(this.state.footTeams);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

componentDidMount() {
    this.getSoccer();
}

    handleChange(value) {
        this.setState({ selectValue: value })
    }

    handleChangeNews(value) {
        this.setState({ selectNews: value })
    }


    handleChangeFoot(value) {
        this.setState({ selectFoot: value })
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    addWidget = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = () => {
        switch (this.state.selectValue) {
            case "meteo":
                if (this.state.inputCity.length > 2) {
                    this.meteo.current.addNewCity(this.state.inputCity);
                    this.handleCancel();
                }
                break;
            case "bourse":
                const newCrypto = {
                    name: this.state.inputCrypto,
                    conversion: this.state.inputTarget
                }
                this.bourse.current.addCrypto(newCrypto);
                this.handleCancel();
                break;
            case "steam":
                if (this.state.inputSteamId > 10) {
                    this.steam.current.addNewSteamId(this.state.inputSteamId);
                    this.handleCancel();
                }
                break;
            case "news": 
                console.log(this.state.selectNews);
                this.news.current.addNews(this.state.selectNews);
                this.handleCancel();
            case "football": 
                console.log(this.state.selectFoot);
                this.football.current.addNewTeams(this.state.selectFoot);
                this.handleCancel();
            default:
                break;
        }
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    render() {
        return (
            <Layout>
                <Modal
                    title="Ajouter un nouveau Widget"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <form onSubmit={this.handleSubmit}>
                        <FormItem hasFeedback style={{ margin: "auto", textAlign: "center" }}>
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Sélectionner un widget"
                                optionFilterProp="children"
                                onChange={this.handleChange}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >

                                <Option value="meteo">Meteo</Option>
                                <Option value="bourse">Bourse</Option>
                                <Option value="steam">Steam</Option>
                                <Option value="news">News</Option>
                                <Option value="football">Football</Option>
                            </Select>
                            {this.state.selectValue == "meteo" && <MeteoForm handleInputChange={this.handleInputChange} inputCity={this.state.inputCity} />}
                            {this.state.selectValue == "bourse" && <BourseForm handleInputChange={this.handleInputChange} inputTarget={this.state.inputTarget} inputCrypto={this.state.inputCrypto} />}
                            {this.state.selectValue == "steam" && <SteamForm handleInputChange={this.handleInputChange} inputSteamId={this.state.inputSteamId} />}
                            {this.state.selectValue == "news" && <NewsForm handleChangeNews={this.handleChangeNews} />}
                            {this.state.selectValue == "football" && <FootBallForm handleChangeFoot={this.handleChangeFoot} footTeams={this.state.footTeams}/>}

                        </FormItem>
                    </form>
                </Modal>

                <Meteo {...this.state.services} ref={this.meteo} />
                <FootBall {...this.state.services} ref={this.football} />
                <Bourse {...this.state.services} ref={this.bourse} />
                <Steam {...this.state.services} ref={this.steam} />
                <News {...this.state.services} ref={this.news} />

                <Row style={{ marginLeft: "auto", marginRight: "auto" }}>
                    <Col>
                        <Card
                            style={{ width: 300, marginTop: "100px", textAlign: "center", color: "#218df7" }}
                            actions={[<Icon type="plus-square" theme="outlined" onClick={this.addWidget} />]}>
                            <b style={{ textTransform: "uppercase", fontWeight: "bold" }}>
                                Ajouter un Widget</b>
                        </Card>
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default MyAccount;
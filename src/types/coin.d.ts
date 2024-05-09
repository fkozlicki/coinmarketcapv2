export interface CoinsResponse {
	Message: string;
	Type: number;
	MetaData: MetaData;
	SponsoredData: any[];
	Data: CoinsData[];
	RateLimit: RateLimit;
	HasWarning: boolean;
}

export interface CoinsData {
	CoinInfo: CoinInfo;
	RAW?: Raw;
	DISPLAY?: Display;
}

export interface CoinInfo {
	Id: string;
	Name: string;
	FullName: string;
	Internal: string;
	ImageUrl: string;
	Url: string;
	Algorithm: string;
	ProofType: string;
	Rating: Rating;
	NetHashesPerSecond: number;
	BlockNumber: number;
	BlockTime: number;
	BlockReward: number;
	AssetLaunchDate: Date;
	MaxSupply: number;
	Type: number;
}

export interface Rating {
	Weiss: Weiss;
}

export interface Weiss {
	Rating: string;
	TechnologyAdoptionRating: string;
	MarketPerformanceRating: string;
}

export interface Display {
	USD: DisplayUsd;
}

export interface DisplayUsd {
	FROMSYMBOL: string;
	TOSYMBOL: PurpleTOSYMBOL;
	MARKET: PurpleMARKET;
	LASTMARKET: Market;
	TOPTIERVOLUME24HOUR: string;
	TOPTIERVOLUME24HOURTO: string;
	LASTTRADEID: string;
	PRICE: string;
	LASTUPDATE: Lastupdate;
	LASTVOLUME: string;
	LASTVOLUMETO: string;
	VOLUMEHOUR: string;
	VOLUMEHOURTO: string;
	OPENHOUR: string;
	HIGHHOUR: string;
	LOWHOUR: string;
	VOLUMEDAY: string;
	VOLUMEDAYTO: string;
	OPENDAY: string;
	HIGHDAY: string;
	LOWDAY: string;
	VOLUME24HOUR: string;
	VOLUME24HOURTO: string;
	OPEN24HOUR: string;
	HIGH24HOUR: string;
	LOW24HOUR: string;
	CHANGE24HOUR: string;
	CHANGEPCT24HOUR: string;
	CHANGEDAY: string;
	CHANGEPCTDAY: string;
	CHANGEHOUR: string;
	CHANGEPCTHOUR: string;
	CONVERSIONTYPE: Conversiontype;
	CONVERSIONSYMBOL: Conversionsymbol;
	CONVERSIONLASTUPDATE: Lastupdate;
	SUPPLY: string;
	MKTCAP: string;
	MKTCAPPENALTY: Mktcappenalty;
	CIRCULATINGSUPPLY: string;
	CIRCULATINGSUPPLYMKTCAP: string;
	TOTALVOLUME24H: string;
	TOTALVOLUME24HTO: string;
	TOTALTOPTIERVOLUME24H: string;
	TOTALTOPTIERVOLUME24HTO: string;
	IMAGEURL: string;
}

export interface Raw {
	USD: RawUsd;
}

export interface RawUsd {
	TYPE: string;
	MARKET: Market;
	FROMSYMBOL: string;
	TOSYMBOL: FluffyTOSYMBOL;
	FLAGS: string;
	LASTMARKET: Market;
	MEDIAN: number;
	TOPTIERVOLUME24HOUR: number;
	TOPTIERVOLUME24HOURTO: number;
	LASTTRADEID: string;
	PRICE: number;
	LASTUPDATE: number;
	LASTVOLUME: number;
	LASTVOLUMETO: number;
	VOLUMEHOUR: number;
	VOLUMEHOURTO: number;
	OPENHOUR: number;
	HIGHHOUR: number;
	LOWHOUR: number;
	VOLUMEDAY: number;
	VOLUMEDAYTO: number;
	OPENDAY: number;
	HIGHDAY: number;
	LOWDAY: number;
	VOLUME24HOUR: number;
	VOLUME24HOURTO: number;
	OPEN24HOUR: number;
	HIGH24HOUR: number;
	LOW24HOUR: number;
	CHANGE24HOUR: number;
	CHANGEPCT24HOUR: number;
	CHANGEDAY: number;
	CHANGEPCTDAY: number;
	CHANGEHOUR: number;
	CHANGEPCTHOUR: number;
	CONVERSIONTYPE: Conversiontype;
	CONVERSIONSYMBOL: Conversionsymbol;
	CONVERSIONLASTUPDATE: number;
	SUPPLY: number;
	MKTCAP: number;
	MKTCAPPENALTY: number;
	CIRCULATINGSUPPLY: number;
	CIRCULATINGSUPPLYMKTCAP: number;
	TOTALVOLUME24H: number;
	TOTALVOLUME24HTO: number;
	TOTALTOPTIERVOLUME24H: number;
	TOTALTOPTIERVOLUME24HTO: number;
	IMAGEURL: string;
}

export interface MetaData {
	Count: number;
}

export class SeatMap {
    public Cabins: Array<Cabin> = [];
}

export class Cabin {
    public CabinType: string;
    public CabinName: string;
    public SeatRows: Array<SeatRow> = [];
}

export class SeatRow {
    public RowNumber: string;
    public RowCharacteristics: Array<string>;
    public Seats: Array<Seat> = [];
    public HeaderRow?: boolean = false;
    public StyleClass?: string = "";
}

export class Seat {
    public SeatAvailability: string;
    public SeatNumber: string = "";
    public SeatCharacteristics: Array<string> = [];
    public ReconciledStatus: number;
    public SeatPriceList?: any;
    public MidCol?: boolean = false;
    public StyleClass?: string = "";
    public IsSeatSelected?: boolean = false;
    public PassengerRPH?:string = "";
}
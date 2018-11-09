import { DeviceState } from "./devicestate.model";
import { InventoryCategory } from "./inventorycategory.model";
import { MeasurementUnit } from "./measurementunit.model";
import { ModelBrand } from "./modelbrand.model";

export class Device{

    serialNumber:String;
	name:String;
	manufacturerModel:String;
	description:String;
	quantity:number;
	state:DeviceState=new DeviceState();
	category:InventoryCategory=new InventoryCategory();
	brand:ModelBrand=new ModelBrand();
	unit:MeasurementUnit=new MeasurementUnit();


}
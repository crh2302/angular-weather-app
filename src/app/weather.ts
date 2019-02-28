/**  This class has some of the properties returned by the third party API*/
export class Weather {
  description: string;
  date: string;
  icon: string;
  temperature: string;
  temperature_high: string;
  temperature_low: string;
  wind_speed: string;
  humidity: string;


/**  Returns if low and high are equal. This method can be used for determining
if it's necesary to show both properties in the template*/
  isLowAndHighTempsEqual():boolean {
    return (this.temperature_high === this.temperature_low);
  }

  constructor(description: string,
              date: string,
              icon: string,
              temperature:string,
              temperature_high: string,
              temperature_low: string,
              wind_speed: string,
              humidity:string){
                this.description = description;
                this.date=date;
                this.icon=icon;
                this.temperature=temperature;
                this.temperature_high=temperature_high;
                this.temperature_low=temperature_low;
                this.wind_speed = wind_speed;
                this.humidity = humidity;

  }
}

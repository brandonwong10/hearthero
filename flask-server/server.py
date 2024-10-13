from flask import Flask, jsonify
from flask_cors import CORS  # Import CORS
from network_as_code.models.device import DeviceIpv4Addr
import network_as_code as nac

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

client = nac.NetworkAsCodeClient(token="c21a1bae39msh562b64a944e0456p1b122cjsn2b29f018b09e")  # Replace with your actual application key

@app.route("/location")
def get_location():
    try:
        # Create a device object using Network as Code Client
        my_device = client.devices.get(
            "device@testcsp.net",
            ipv4_address=DeviceIpv4Addr(
                public_address="233.252.0.2",
                private_address="192.0.2.25",
                public_port=80
            ),
            ipv6_address="2001:db8:1234:5678:9abc:def0:fedc:ba98",
            phone_number="+36721601234567"
        )        
        # Fetch the device's location details
        location = my_device.location(max_age=3600)

        if location and location.longitude is not None and location.latitude is not None:
            return jsonify({
                "longitude": location.longitude,
                "latitude": location.latitude,
            })
        else:
            print("No location data available for device")
            return jsonify({"error": "No location data available"}), 404

    except Exception as e:
        print(f"Error fetching location for device: {e}")
        return jsonify({"error": str(e)}), 500  # Return error details

if __name__ == "__main__":
    app.run(debug=True)

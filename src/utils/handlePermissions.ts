import { PermissionsAndroid, Platform, Rationale } from "react-native";

export enum AndroidPermission {
    READ_CALENDAR = "android.permission.READ_CALENDAR",
    WRITE_CALENDAR = "android.permission.WRITE_CALENDAR",
    CAMERA = "android.permission.CAMERA",
    READ_CONTACTS = "android.permission.READ_CONTACTS",
    WRITE_CONTACTS = "android.permission.WRITE_CONTACTS",
    GET_ACCOUNTS = "android.permission.GET_ACCOUNTS",
    ACCESS_FINE_LOCATION = "android.permission.ACCESS_FINE_LOCATION",
    ACCESS_COARSE_LOCATION = "android.permission.ACCESS_COARSE_LOCATION",
    RECORD_AUDIO = "android.permission.RECORD_AUDIO",
    READ_PHONE_STATE = "android.permission.READ_PHONE_STATE",
    CALL_PHONE = "android.permission.CALL_PHONE",
    READ_CALL_LOG = "android.permission.READ_CALL_LOG",
    WRITE_CALL_LOG = "android.permission.WRITE_CALL_LOG",
    ADD_VOICEMAIL = "com.android.voicemail.permission.ADD_VOICEMAIL",
    USE_SIP = "android.permission.USE_SIP",
    PROCESS_OUTGOING_CALLS = "android.permission.PROCESS_OUTGOING_CALLS",
    BODY_SENSORS = "android.permission.BODY_SENSORS",
    SEND_SMS = "android.permission.SEND_SMS",
    RECEIVE_SMS = "android.permission.RECEIVE_SMS",
    READ_SMS = "android.permission.READ_SMS",
    RECEIVE_WAP_PUSH = "android.permission.RECEIVE_WAP_PUSH",
    RECEIVE_MMS = "android.permission.RECEIVE_MMS",
    READ_EXTERNAL_STORAGE = "android.permission.READ_EXTERNAL_STORAGE",
    WRITE_EXTERNAL_STORAGE = "android.permission.WRITE_EXTERNAL_STORAGE",
}

export async function requestPermission(permission: AndroidPermission, rationale?: Rationale): Promise<boolean> {
    if (Platform.OS === "android") {
        try {
            const granted = await PermissionsAndroid.request(permission, rationale);
            // On devices before SDK version 23, the permissions are automatically granted if they appear in the manifest,
            // so check and request should always be true.
            // https://github.com/facebook/react-native-website/blob/master/docs/permissionsandroid.md
            // const isAuthorized = Platform.Version >= 23 ? granted === PermissionsAndroid.RESULTS.GRANTED : granted === true;

            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            return false;
        }
    }
    return true;
}

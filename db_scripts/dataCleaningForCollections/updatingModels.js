//DB connection
var db = connect('localhost:27017/produccion');//localhost:27017/records

//unsetting useless/deprecated fields
db.models.updateMany({}, {"$unset": {"tifPath": "", "statCoverLC1": ""}});

//setting new fields with its default values
db.models.updateMany({}, {"$set": {"published": false, "customCitation": null}});

//renaming paths to files
db.models.updateMany({}, {"$rename": {"pngPath": "png", "zipPath": "zip", "thumbPath": "thumb"}});

//db field update for models collection
db.models.updateMany({"$or": [{"consensusMethod": {"$exists": false}}, {"consensusMethod": {"$nin": ["all", "mean", "median"]}}]}, {"$set": {"consensusMethod": null}});
db.models.updateMany({"$or": [{"modelingMethod": {"$exists": false}}, {"modelingMethod": {"$in": ["NULL","","[\"NA\"]", "NA", "[]"]}}]}, {"$set": {"modelingMethod": null}});
db.models.updateMany({"$or": [{"modelLevel": {"$exists": false}}, {"modelLevel": {"$in": ["NULL","","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"modelLevel": null}});
db.models.updateMany({"modelStatus": "developing"}, {"$set": {"modelStatus": "Developing"}});
db.models.updateMany({"$or": [{"modelStatus": {"$exists": false}}, {"modelStatus": {"$nin": ["Developing", "pendingValidation", "Valid"]}}]}, {"$set": {"modelStatus": null}});
db.models.updateMany({"$or": [{"published": {"$exists": false}}, {"published": {"$in": ["NULL","","[\"NA\"]", "NA", "[]"]}}]}, {"$set": {"published": null}});
db.models.updateMany({"published": {"$in":["1", 1, "TRUE"]}}, {"$set": {"published": true}});
db.models.updateMany({"published": {"$in":["0", 0, "FALSE"]}}, {"$set": {"published": false}});
db.models.updateMany({"$or": [{"customCitation": {"$exists": false}}, {"customCitation": {"$in": ["NULL","[\"NA\"]", "NA", "[]", ""]}}]}, {"$set": {"customCitation": null}});
db.models.updateMany({"$or": [{"isActive": {"$exists": false}}, {"isActive": {"$in": ["NULL",,"[\"NA\"]", "NA", "[]"]}}]}, {"$set": {"isActive": null}});
db.models.updateMany({"isActive": {"$in":["1", 1, "TRUE"]}}, {"$set": {"isActive": true}});
db.models.updateMany({"isActive": {"$in":["0", 0, "FALSE"]}}, {"$set": {"isActive": false}});
db.models.updateMany({"$or": [{"modelID": {"$exists": false}}, {"modelID": {"$in": ["NULL", "", "[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"modelID": null}});
db.models.updateMany({"$or": [{"recsUsed": {"$exists": false}}, {"recsUsed": {"$in": ["NULL", "", "[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"recsUsed": null}});
db.models.updateMany({"$or": [{"omission": {"$exists": false}}, {"omission": {"$in": ["NULL", "", "[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"omission": null}});
db.models.updateMany({"$or": [{"perfStatSD": {"$exists": false}}, {"perfStatSD": {"$in": ["NULL","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"perfStatSD": null}});
db.models.updateMany({"$or": [{"perfStatType": {"$exists": false}}, {"perfStatType": {"$in": ["NULL","","[\"NA\"]", "NA", "[]", -9999]}}]},  {"$set": {"perfStatType": null}});
db.models.updateMany({"$or": [{"perfStatValue": {"$exists": false}}, {"perfStatValue": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"perfStatValue": null}});
db.models.updateMany({"$or": [{"pValue": {"$exists": false}}, {"pValue": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"pValue": null}});
db.models.updateMany({"$or": [{"validationType": {"$exists": false}}, {"validationType": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"validationType": null}});
db.models.updateMany({"thresholdType": {"$in": ["continuous"]}}, {"$set": {"thresholdType": "Continuous"}});
db.models.updateMany({"$or": [{"thresholdType": {"$exists": false}}, {"thresholdType": {"$nin": [0, 10, 20, 30, "Continuous"]}}]}, {"$set": {"thresholdType": null}});
db.models.updateMany({"$or": [{"thresholdValue": {"$exists": false}}, {"thresholdValue": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"thresholdValue": null}});
db.models.updateMany({"$or": [{"modelAuthors": {"$exists": false}}, {"modelAuthors": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"modelAuthors": null}});
db.models.updateMany({"$or": [{"userID_bm": {"$exists": false}}, {"userID_bm": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"userID_bm": null}});
db.models.updateMany({"$or": [{"dd": {"$exists": false}},{"dd": {"$in": ["NULL", "","[\"NA\"]", "NA", -9999]}}]}, {"$set": {"dd": null}});
db.models.updateMany({"$or": [{"mm": {"$exists": false}},{"mm": {"$in": ["NULL", "","[\"NA\"]", "NA", -9999]}}]}, {"$set": {"mm": null}});
db.models.updateMany({"$or": [{"yyyy": {"$exists": false}}, {"yyyy": {"$gte": 2018}}, {"yyyy": {"$in": ["","[\"NA\"]", "NA", -9999]}}]}, {"$set": {"yyyy": null}});
db.models.updateMany({"$or": [{"statCoverLC2": {"$exists": false}}, {"statCoverLC2": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC2": null}});
db.models.updateMany({"$or": [{"statCoverLC3": {"$exists": false}}, {"statCoverLC3": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC3": null}});
db.models.updateMany({"$or": [{"statCoverLC4": {"$exists": false}}, {"statCoverLC4": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC4": null}});
db.models.updateMany({"$or": [{"statCoverLC5": {"$exists": false}}, {"statCoverLC5": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC5": null}});
db.models.updateMany({"$or": [{"statCoverLC6": {"$exists": false}}, {"statCoverLC6": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC6": null}});
db.models.updateMany({"$or": [{"statCoverLC7": {"$exists": false}}, {"statCoverLC7": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC7": null}});
db.models.updateMany({"$or": [{"statCoverLC8": {"$exists": false}}, {"statCoverLC8": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC8": null}});
db.models.updateMany({"$or": [{"statCoverLC9": {"$exists": false}}, {"statCoverLC9": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC9": null}});
db.models.updateMany({"$or": [{"statCoverLC10": {"$exists": false}}, {"statCoverLC10": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC10": null}});
db.models.updateMany({"$or": [{"statCoverLC11": {"$exists": false}}, {"statCoverLC11": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC11": null}});
db.models.updateMany({"$or": [{"statCoverLC12": {"$exists": false}}, {"statCoverLC12": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC12": null}});
db.models.updateMany({"$or": [{"statCoverLC13": {"$exists": false}}, {"statCoverLC13": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC13": null}});
db.models.updateMany({"$or": [{"statCoverLC14": {"$exists": false}}, {"statCoverLC14": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC14": null}});
db.models.updateMany({"$or": [{"statCoverLC15": {"$exists": false}}, {"statCoverLC15": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC15": null}});
db.models.updateMany({"$or": [{"statCoverLC16": {"$exists": false}}, {"statCoverLC16": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC16": null}});
db.models.updateMany({"$or": [{"statCoverLC17": {"$exists": false}}, {"statCoverLC17": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC17": null}});
db.models.updateMany({"$or": [{"statCoverLC18": {"$exists": false}}, {"statCoverLC18": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC18": null}});
db.models.updateMany({"$or": [{"statCoverLC19": {"$exists": false}}, {"statCoverLC19": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC19": null}});
db.models.updateMany({"$or": [{"statCoverLC20": {"$exists": false}}, {"statCoverLC20": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC20": null}});
db.models.updateMany({"$or": [{"statCoverLC21": {"$exists": false}}, {"statCoverLC21": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC21": null}});
db.models.updateMany({"$or": [{"statCoverLC22": {"$exists": false}}, {"statCoverLC22": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC22": null}});
db.models.updateMany({"$or": [{"statCoverLC23": {"$exists": false}}, {"statCoverLC23": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC23": null}});
db.models.updateMany({"$or": [{"statCoverLC24": {"$exists": false}}, {"statCoverLC24": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC24": null}});
db.models.updateMany({"$or": [{"statCoverLC25": {"$exists": false}}, {"statCoverLC25": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC25": null}});
db.models.updateMany({"$or": [{"statCoverLC26": {"$exists": false}}, {"statCoverLC26": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC26": null}});
db.models.updateMany({"$or": [{"statCoverLC27": {"$exists": false}}, {"statCoverLC27": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC27": null}});
db.models.updateMany({"$or": [{"statCoverLC28": {"$exists": false}}, {"statCoverLC28": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC28": null}});
db.models.updateMany({"$or": [{"statCoverLC29": {"$exists": false}}, {"statCoverLC29": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC29": null}});
db.models.updateMany({"$or": [{"statCoverLC30": {"$exists": false}}, {"statCoverLC30": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC30": null}});
db.models.updateMany({"$or": [{"statCoverLC31": {"$exists": false}}, {"statCoverLC31": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC31": null}});
db.models.updateMany({"$or": [{"statCoverLC32": {"$exists": false}}, {"statCoverLC32": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC32": null}});
db.models.updateMany({"$or": [{"statCoverLC33": {"$exists": false}}, {"statCoverLC33": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC33": null}});
db.models.updateMany({"$or": [{"statCoverLC34": {"$exists": false}}, {"statCoverLC34": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC34": null}});
db.models.updateMany({"$or": [{"statCoverLC35": {"$exists": false}}, {"statCoverLC35": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC35": null}});
db.models.updateMany({"$or": [{"statCoverLC36": {"$exists": false}}, {"statCoverLC36": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC36": null}});
db.models.updateMany({"$or": [{"statCoverLC37": {"$exists": false}}, {"statCoverLC37": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC37": null}});
db.models.updateMany({"$or": [{"statCoverLC38": {"$exists": false}}, {"statCoverLC38": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC38": null}});
db.models.updateMany({"$or": [{"statCoverLC39": {"$exists": false}}, {"statCoverLC39": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC39": null}});
db.models.updateMany({"$or": [{"statCoverLC40": {"$exists": false}}, {"statCoverLC40": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC40": null}});
db.models.updateMany({"$or": [{"statCoverLC41": {"$exists": false}}, {"statCoverLC41": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC41": null}});
db.models.updateMany({"$or": [{"statCoverLC42": {"$exists": false}}, {"statCoverLC42": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC42": null}});
db.models.updateMany({"$or": [{"statCoverLC43": {"$exists": false}}, {"statCoverLC43": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC43": null}});
db.models.updateMany({"$or": [{"statCoverLC44": {"$exists": false}}, {"statCoverLC44": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC44": null}});
db.models.updateMany({"$or": [{"statCoverLC45": {"$exists": false}}, {"statCoverLC45": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC45": null}});
db.models.updateMany({"$or": [{"statCoverLC46": {"$exists": false}}, {"statCoverLC46": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC46": null}});
db.models.updateMany({"$or": [{"statCoverLC47": {"$exists": false}}, {"statCoverLC47": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC47": null}});
db.models.updateMany({"$or": [{"statCoverLC48": {"$exists": false}}, {"statCoverLC48": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC48": null}});
db.models.updateMany({"$or": [{"statCoverLC49": {"$exists": false}}, {"statCoverLC49": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC49": null}});
db.models.updateMany({"$or": [{"statCoverLC50": {"$exists": false}}, {"statCoverLC50": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC50": null}});
db.models.updateMany({"$or": [{"statCoverLC51": {"$exists": false}}, {"statCoverLC51": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC51": null}});
db.models.updateMany({"$or": [{"statCoverLC52": {"$exists": false}}, {"statCoverLC52": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC52": null}});
db.models.updateMany({"$or": [{"statCoverLC53": {"$exists": false}}, {"statCoverLC53": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC53": null}});
db.models.updateMany({"$or": [{"statCoverLC54": {"$exists": false}}, {"statCoverLC54": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC54": null}});
db.models.updateMany({"$or": [{"statCoverLC55": {"$exists": false}}, {"statCoverLC55": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC55": null}});
db.models.updateMany({"$or": [{"statForestLoss00": {"$exists": false}}, {"statForestLoss00": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statForestLoss00": null}});
db.models.updateMany({"$or": [{"statForestLoss05": {"$exists": false}}, {"statForestLoss05": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statForestLoss05": null}});
db.models.updateMany({"$or": [{"statForestLoss10": {"$exists": false}}, {"statForestLoss10": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statForestLoss10": null}});
db.models.updateMany({"$or": [{"statForestLoss12": {"$exists": false}}, {"statForestLoss12": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statForestLoss12": null}});
db.models.updateMany({"$or": [{"statForestLoss90": {"$exists": false}}, {"statForestLoss90": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statForestLoss90": null}});
db.models.updateMany({"$or": [{"statFutureForest30c": {"$exists": false}}, {"statFutureForest30c": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statFutureForest30c": null}});
db.models.updateMany({"$or": [{"statFutureForest30d": {"$exists": false}}, {"statFutureForest30d": {"$in": ["NULL", "NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statFutureForest30d": null}});
db.models.updateMany({"$or": [{"statFutureForest30h": {"$exists": false}}, {"statFutureForest30h": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statFutureForest30h": null}});
db.models.updateMany({"$or": [{"statRangeSize": {"$exists": false}}, {"statRangeSize": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statRangeSize": null}});
db.models.updateMany({"$or": [{"statModelEOO": {"$exists": false}}, {"statModelEOO": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statModelEOO": null}});
db.models.updateMany({"$or": [{"statRecsEOO": {"$exists": false}}, {"statRecsEOO": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statRecsEOO": null}});
db.models.updateMany({"$or": [{"statRepPA": {"$exists": false}}, {"statRepPA": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statRepPA": null}});
db.models.updateMany({"$or": [{"statRepPA1": {"$exists": false}}, {"statRepPA1": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statRepPA1": null}});
db.models.updateMany({"$or": [{"statRepPA2": {"$exists": false}}, {"statRepPA2": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statRepPA2": null}});
db.models.updateMany({"$or": [{"statRepPA3": {"$exists": false}}, {"statRepPA3": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statRepPA3": null}});
db.models.updateMany({"$or": [{"thumb": {"$exists": false}}, {"thumb": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"thumb": null}});
db.models.updateMany({"$or": [{"zip": {"$exists": false}}, {"zip": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"zip": null}});
db.models.updateMany({"$or": [{"png": {"$exists": false}}, {"png": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"png": null}});
db.models.updateMany({"$or": [{"methodFile": {"$exists": false}}, {"methodFile": {"$in": ["NULL", "","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"methodFile": null}});
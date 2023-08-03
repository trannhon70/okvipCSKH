require("../database");
const mongoose = require("mongoose");

const { Schema } = mongoose;

let contactSchema = new Schema(
  {
    order1: {
      type: Number,
      default: 0,
    },
    domain: {
      type: Schema.Types.ObjectId,
      ref: "Domains",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
    contactType: {
      type: Schema.Types.ObjectId,
      ref: "ContactTypes",
    },
    contacts: [
      {
        title: {
          type: String,
        },
        icon: {
          type: String,
        },
        slug: {
          type: String,
        },
        color: {
          type: String,
        },

        order: {
          type: Number,
          default: 0,
        },
        description: {
          type: String,
        },
        content: {
          type: String,
        },
        backgroundColor: {
          type: String,
        },
        borderRadius: {
          type: Number,
        },
      },
    ],
    createdTime: {
      type: Date,
      default: Date.now,
    },
    updatedTime: {
      type: Date,
    },
  },
  { versionKey: false }
);

contactSchema.index({ title: "text" });

module.exports = mongoose.model("Contacts", contactSchema);

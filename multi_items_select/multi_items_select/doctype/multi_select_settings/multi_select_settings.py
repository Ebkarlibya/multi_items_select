# Copyright (c) 2022, Ebkar and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class MultiSelectSettings(Document):
	def validate(self):
		# d = self
		frappe.publish_realtime("mis_settings_update")
		pass
